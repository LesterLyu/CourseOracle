import React, {useState} from 'react';
import {deposit, withdraw} from '../../api/transaction'
import SubmitButton from '../../components/SubmitButton'
import {Divider, Typography, TextField} from "@mui/material";
import {RECEIVER_ADDRESS} from '../../config'

export default function Transaction() {
  const [depositAmount, setDepositAmount] = useState(0)
  const [withdrawAmount, setWithdrawAmount] = useState(1)
  const [accountAddress, setAccountAddress] = useState('')
  const [depositWaiting, setDepositWaiting] = useState(false)
  const [withdrawWaiting, setWithdrawWaiting] = useState(false)

  async function enableDeposit(){
    if (!depositAmount || depositAmount === 0){
        alert('Deposit amount should be a positive number')
        return
    }
    setDepositWaiting(true)
    const acc = await window.conflux.enable() // connect to wallet
    const tx = window.confluxJS.sendTransaction({
      from: acc[0],
      to: RECEIVER_ADDRESS, 
      value: 1e18 * depositAmount
    })
    await tx.executed()
    console.log('executed')
    await tx.confirmed()
    console.log('confirmed')
    const hash = await tx
    const res = await deposit(hash, depositAmount)
    if (res.error){
        alert(res.error)
    }else{
        alert('Deposit successfully!')
    }
    setDepositWaiting(false)
  }

  async function enableWithdraw(){
    if (!withdrawAmount || withdrawAmount === 0){
        alert('Deposit amount should be a positive number')
        return
    }
    setWithdrawWaiting(true)
    const res = await withdraw(withdrawAmount, accountAddress)
    console.log(res)
    if (res.error){
        alert(res.error)
    }else{
        alert('You are able to see the transaction process in transaction hash '+ res.hash)
    }
    setWithdrawWaiting(false)
  }

  return <Typography variant={"h1"} fontSize={40} sx={{pt: 5}}>
    Transaction
    <br></br>
    <TextField
            type="Number"
            label="Deposit Amount"
            value={depositAmount}
            onChange={e => setDepositAmount(parseInt(e.target.value))}
            sx={{minHeight: '80px'}}
          />
    <SubmitButton sx={{
            marginTop: 3,
            marginBottom: 0
          }} onClick={enableDeposit} loading={depositWaiting}>
            Deposit
    </SubmitButton>
    <Divider></Divider>
    <br></br>
    <TextField
            label="Conflux Address"
            value={accountAddress}
            fullWidth
            onChange={e => setAccountAddress(e.target.value)}
            helperText={'please make sure input is correct address!'}
            sx={{minHeight: '80px', marginBottom: '15px'}}
          />
    <TextField
            type="Number"
            label="Withdraw Amount"
            value={withdrawAmount}
            onChange={e => setWithdrawAmount(parseInt(e.target.value))}
            sx={{minHeight: '80px'}}
    />
    <SubmitButton sx={{
            marginTop: 3,
            marginBottom: 0
          }} onClick={enableWithdraw} loading={withdrawWaiting}>
            Withdraw
    </SubmitButton>
  </Typography>
}
