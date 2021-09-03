const User = require("../models/user")
const Transaction = require("../models/transaction")
const { Conflux, Drip } = require('js-conflux-sdk');
require('dotenv').config();

async function deposit(req, res){
    if (!req.session.email || !req.body.amount){
        res.status(404).send({error: 'invalid request'});
    }
    const user = await User.findOne({email: req.session.email})
    if (!user){
        res.status(404).send({error: 'invalid request'});
    }
    const conflux = new Conflux({ 
        url: process.env.NETWORK_URL,
        networkId: 1,
      });
    const transaction = await conflux.getTransactionByHash(req.body.hash);
    if (transaction.status === 0 && 
        (transaction.to === 'CFXTEST:TYPE.USER:' + process.env.RECEICER_ADDRESS.toUpperCase () || 
        transaction.to === 'cfxtest:' + process.env.RECEICER_ADDRESS)  &&
        transaction.value == req.body.amount * 1e18){ //transaction.value is BigInt
        const tmp = await Transaction.find({hash: req.body.hash})
        if (tmp.length === 0){
            const newTransaction = new Transaction({
                user: user._id,
                type: 'deposit',
                amount: req.body.amount,
                hash: req.body.hash,
            })
            await newTransaction.save()
            user.balance += req.body.amount;
            await user.save()
            res.send({message: 'success'})
        }else{
            res.status(404).send({error: 'already redeem the tokens'});
        }
    }else{
        res.status(404).send({error: 'invalid transaction hash'});
    }
}

async function withdraw(req, res){
    if (!req.session.email || !req.body.amount || !req.body.address){
        res.status(400).send({error: 'invalid request'});
    }
    const user = await User.findOne({email: req.session.email})
    if (!user){
        res.status(400).send({error: 'invalid request'});
    }
    if (user.balance - req.body.amount >= 0){
        user.balance -= req.body.amount;
        await user.save();
        const conflux = new Conflux({ 
            url: process.env.NETWORK_URL, // if deploy, change to main net
            networkId: 1,
          });
        const account = await conflux.wallet.addPrivateKey(process.env.PRIVATE_KEY)
        const hash = await conflux.sendTransaction({
            from: account.address,
            to: req.body.address,
            value: Drip.fromCFX(req.body.amount)
        })
        const newTransaction = new Transaction({
            user: user._id,
            type: 'withdraw',
            amount: req.body.amount,
            hash: hash
        })
        await newTransaction.save()
        res.send({hash:hash})
    }else{
        res.status(400).send({error: 'insuffient balance'})
    }
}

module.exports = {
    deposit, withdraw
};