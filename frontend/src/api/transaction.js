import {postJson} from "./helpers"

export const deposit = async (hash, amount) => {
    const url = '/api/transaction/deposit';
    const data = {
        hash: hash,
        amount: amount
      }
    return await postJson(url, data)
}

export const withdraw = async (amount, address) => {
    const url = '/api/transaction/withdraw';
    const data = {
        amount: amount,
        address: address,
      }
    return await postJson(url, data)
}