const User = require("../models/user");
const Institute = require("../models/institute")
const Course = require("../models/course")
const Prof = require("../models/prof")
const CourseRating = require("../models/courseRating")
const {APIError} = require("../utils/errors");
const { Conflux, Drip } = require('js-conflux-sdk');

async function ratingOnChain(comment) {
    const cfx = new Conflux({
        url: 'https://test.confluxrpc.com',
        defaultGasPrice: 100, // The default gas price of your following transactions
        defaultGas: 1000000, // The default gas of your following transactions
        logger: console,
        networkId: 1,
    });

    const PRIVATE_KEY = '0xe029e006d99d956d58e5c87e96814ab703cB3691c024958230a920fe296e81ad'; // kevin's private key
    const account = cfx.wallet.addPrivateKey(PRIVATE_KEY); // create account instance
    const receiver = 'cfxtest:aaph5gjm3g9muk0r3e5pmka6gsrjnhh5zjpkk104pp'; // kevin's address

    let txParams = {
        from: receiver, // from account instance and will by sign by account.privateKey
        // nonce
        // gasPrice
        // gas
        to: receiver, // accept address string or account instance
        value: Drip.fromCFX(0.125), // use the conversion utility function
        // storageLimit
        // epochHeight
        // data: confluxWeb.utils.toHex(comment)
        data: '0x' + Buffer.from(comment, 'utf8').toString('hex'),
    };
    console.log(comment);
    console.log('0x' + Buffer.from(comment, 'utf8').toString('hex'));
    const txHash = await cfx.sendTransaction(txParams);
    // console.log('-------------------------');
    // console.log(txHash);
    // console.log('-------------------------');
    return txHash;
}

async function postRating(req, res, next) {
    // const user = await User.findOne({address: req.body.address});
    // if (!user) {
    //     return next(new APIError(403, 'Please login before submit'));
// }
    const userEmail = req.session.email || '';
    let prof;
    let institute = await Institute.findOne({name: req.body.institute});
    if (!institute) {
        institute = new Institute({
            name: req.body.institute,
        })
        await institute.save((err) => {
            if (err) {
                console.log(err);
                return res.status(500).send(err);
            }
        })
    }
    let course = await Course.findOne({institute: req.body.institute, code: req.body.course});
    if (!course) {
        course = new Course({
            code: req.body.course,
            name: "N/A",
            institute: req.body.institute,
            profs: []
        })
        await course.save((err) => {
            if (err) {
                console.log(err);
                return res.status(500).send(err);
            }
        })
        if (!institute.courses.includes(course)) {
            let result = await Institute.updateOne({_id: institute._id}, {$push: {'courses': course}});
            if (!result) {
                console.log(result);
                return res.status(500).send(result);
            }
        }
    }

    prof = await Prof.findOne({name: req.body.prof, institute: institute._id});
    if (!prof) {
        prof = new Prof({
            name: req.body.prof,
            institute: institute,
        });
        await prof.save((err) => {
            if (err) {
                console.log(err);
                return res.status(500).send(err);
            }
        })
    }
    if (!course.profs.includes(prof._id)) {
        let result = await Course.updateOne({_id: course._id}, {$push: {'profs': prof._id}});
        if (!result) {
            console.log(result);
            return res.status(500).send(result);
        }
    }

    let transactionId = '';
    if (req.body.onChain) { // replace with onChain selection
        transactionId = await ratingOnChain(req.body.comment);
    }

    const newRating = new CourseRating({
        institute: institute,
        course: req.body.course,
        prof: prof,
        score: req.body.score,
        comment: req.body.comment,
        year: req.body.year,
        semester: req.body.semester,
        user: userEmail,
        chainTransactionID: transactionId,
    });

    await newRating.save((err) => {
        if (err) {
            console.log(err);
            return res.status(500).send(err);
        }
    });

    return res.status(200).json({msg: 'Successfully post'});
}

async function getRating(req, res, next) {
    let institute = await Institute.findOne({name: req.query['institute']});
    if (!institute) {
        console.log("Institute not found");
        return res.json({
            success: true,
            data: {}
        });
    }
    let ratings = await CourseRating.find({institute: institute._id, course: req.query['course']});
    let data = [];
    for (let i = 0; i < ratings.length; i++) {
        let rating = ratings[i].toObject();
        let profObj =  await Prof.findOne({_id: rating['prof']});
        rating['prof'] = profObj.name;
        let instituteObj = await Institute.findOne({_id: rating['institute']});
        rating['institute'] = instituteObj.name;
        data.push(rating);
    }
    res.json({
        success: true,
        data: data
    })
}

async function likeRating(req, res, next) {
    let err = await CourseRating.updateOne({_id: req.body['_id']}, {$inc: {like: 1}});
    res.send("Success to like");
}

async function unlikeRating(req, res, next) {
    let err = await CourseRating.updateOne({_id: req.body['_id']}, {$inc: {unlike: 1}});
    res.send("Success to dislike");
}

async function cancelLikeRating(req, res, next) {
    let err = await CourseRating.updateOne({_id: req.body['_id']}, {$inc: {like: -1}});
    res.send("Success to cancel like");
}

async function cancelUnlikeRating(req, res, next) {
    let err = await CourseRating.updateOne({_id: req.body['_id']}, {$inc: {unlike: -1}});
    res.send("Success to cancel unlike");
}

module.exports = {
    postRating, getRating,
    likeRating, unlikeRating,
    cancelLikeRating, cancelUnlikeRating,
};
