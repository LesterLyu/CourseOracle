require("dotenv").config();
const { Conflux } = require('js-conflux-sdk')

// cfx init
const cfx = new Conflux({
    url:'https://test.confluxrpc.com',
    networkId: 1
})
const managerAccount = cfx.wallet.addPrivateKey(process.env.MANAGER_KEY)
const { abi } = require('../assets/InftyNft.json')
const minterContract = cfx.Contract({abi, address:process.env.MINTER_ADDRESS})

async function nextTokenId() {
    return await minterContract.totalSupply() + 1n;
}

async function mint(addr, uri) {
    return await minterContract.mint(addr, uri).sendTransaction({from: process.env.MANAGER_ADDRESS}).executed()
}

async function transferCfxTo(toAddr, price) {
    const tx = {
        from: process.env.MANAGER_ADDRESS,
        to: toAddr,
        value: 1e18*price,
        chainId: 1
    }
    const hash = await cfx.sendTransaction(tx).executed();
    console.log(hash)
}

module.exports = {
    nextTokenId,
    mint,
    transferCfxTo
}