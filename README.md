# ConfluxP2PTrading

### 7.13 Meeting: Discussion 

#### User functionality(webpage):
1. See the buying and selling posts 
  reference [binance UI](https://p2p.binance.com/en/trade/buy/USDT)
2. Login Indefitication with Conflux portal 
  reference [LocalCryptos login](https://localcryptos.com/login)
3. Post own buy/sell order

#### Backend database
Schema:
user_information_E(userid = wallet address, trading_history)
posts_E(post_id, user_id, post, date, buy_or_sell, crypto, amount)
trading_history_R(post_id, buyer, seller, date)


#### Smart Contract Interaction
Interact with the backend(will be taught)


#### Smart Contract Design
solidity code


Reference List:
[LocalEthereum 2 source code](https://etherscan.io/address/0x09678741bd50c3e74301f38fbd0136307099ae5d#code)





  
