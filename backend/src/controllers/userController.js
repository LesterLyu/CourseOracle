const User = require("../models/user");
const {APIError} = require('../utils/errors');
const {checkPasswordFormat} = require('../utils/validator');
const {validatePassword, hashPassword} = require('../utils/hashing');

async function logout(req, res, next) {
  req.session.email = undefined;
  res.json({success: true});
}

async function register(req, res, next) {
  const {email, password, firstName, lastName} = req.body;
  if (!email)
    return next(new APIError(400, 'Email is required.', 'email'));
  if (!password)
    return next(new APIError(400, 'Password is required.', 'password'));
  if (!firstName)
    return next(new APIError(400, 'First name is required.', 'firstName'));
  if (!lastName)
    return next(new APIError(400, 'Last name is required.', 'lastName'));

  const result = checkPasswordFormat(password);
  // check password
  if (result !== true) {
    return next(new APIError(400, result));
  }

  // Email exists
  if (await User.findOne({email})) {
    return next(new APIError(400, 'Email exists.', 'email'));
  }

  const {hash, salt} = await hashPassword(password);

  const doc = new User({
    first_name: firstName,
    last_name: lastName,
    email, password, hash, salt
  });

  await doc.save();

  res.json({success: true});
}


async function login(req, res, next) {
  const {email, password} = req.body;
  const doc = await User.findOne({email});

  // Email does not exist.
  if (!doc)
    return next(new APIError(403, 'Username or password is incorrect.'));

  const validated = await validatePassword(password, doc.hash, doc.salt);
  if (validated) {
    req.session.email = email;
    req.session.userId = doc._id;
    res.json({
      success: true,
      data: {email, firstName: doc.firstName, lastName: doc.lastName}
    });
  } else {
    next(new APIError(403, 'Username or password is incorrect.'));
  }
}


const getUser = async (req, res) => {
  // TODO
  if (!req.params.address) {
    return res.status(400).json({error: "invalid request"});
  }

  const user = await User.findOne({address: req.params.address});
  if (!user) {
    return res.status(404).json({error: "user not found"});
  }
  res.send(user);
};

const updateProfile = async (req, res) => {
  // TODO
  // if not exist, create one
  const user = await User.findOne({address: req.body.address});
  if (!user) {
    const newUser = new User({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      address: req.body.address,
      description: req.body.description,
      profile_picture: 'https://ipfs.io/ipfs/QmR9aGP1cQ13sapFBfFLiuhRVSGcrMYvZPmKXNNrobwtFZ?filename=undraw_male_avatar_323b.png',
    })
    newUser.save((err) => {
      if (err) {
        return res.status(500).send(err);
      }
      return res.send("User profile created.");
    });
  } else {
    User.findOneAndUpdate(
      {address: req.body.address},
      {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        address: req.body.address,
        description: req.body.description,
        profile_picture: req.body.profile_picture
      },
      (err) => {
        if (err) {
          res.status(500).send(err)
        } else {
          res.send('User profile updated.')
        }
      }
    )
  }
}

module.exports = {
  login, logout, register,
  getUser,
  updateProfile,
};
