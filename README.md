# ConfluxP2PTrading

### 7.13 Meeting: Discussion 

#### User functionality(webpage) (LSY Kevin Lester)
1. See the buying and selling posts 
  reference [binance UI](https://p2p.binance.com/en/trade/buy/USDT)
2. Login Indefitication with Conflux portal 
  reference [LocalCryptos login](https://localcryptos.com/login)
3. Post own buy/sell order

#### Backend & database (Dino Rex Kevin Lester)
Schema:
user_information_E(userid = wallet address, trading_history)

posts_E(post_id, user_id, post, date, buy_or_sell, crypto, amount)

trading_history_R(post_id, buyer, seller, date)


#### Smart Contract Interaction ()
Interact with the backend(will be taught)




#### Smart Contract Design (Emily Dino Rex Kevin Lester)
solidity code


Reference List:
[LocalEthereum 2 source code](https://etherscan.io/address/0x09678741bd50c3e74301f38fbd0136307099ae5d#code)




8.3 Meeting
Pages:
1. homepage （不登陆也可以看到）
(搜索栏，搜索栏旁边有checkbox，dashborad/log in button)
2.dashoborad（登陆后能看到）
profile（邮箱，余额。。。）我的资料、我的评价，充值，上传资料
3. sign up/log in
(recommand sign up with email, but also support wallet)
4.courserating 
（评价，基本信息，选择是否上链，可以点赞和踩，打赏）
5.coursematerials
（文件，可以打赏，点赞，踩，下载（付钱窗口，登陆后可上传））
6.upload
（课程名字，年份，价格）

后端：
1.database




  
