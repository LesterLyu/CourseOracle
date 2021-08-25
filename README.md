![Logo](frontend/public/logo3.png)
## Course Oracle

### Introduction
Course Oracle provides worldwide students a way to share course materials and course ratings.
Course rating can be stored on-chain optionally. User uses cryptocurrency to purchase course materials, the user
who shared the materials earns a portion from the purchase and can withdraw to their own wallet.

### [Latest Deployment](https://lesterlyu.github.io/CourseOracle/)
> Deployed automatically to GitHub Pages & a personal server once a commit passes all CI checks.

### Requirement
- Node.js 14 or newer
- MongoDB
  - can be a local installation
  - or Run as a Docker container
- Docker Desktop / Docker Engine (If use any container)

### Run MongoDB as Docker container
```shell
docker compose -f  up -d mongodb
```

### Install Yarn
Yarn is used instead of NPM, Yarn provides faster dependency installation and better dependency management.
```shell
npm install -g yarn
```

### Install & Run Backend
```shell
cd backend
yarn install
yarn start
```

### Install & Run Frontend
```shell
cd frontend
yarn install
yarn start
```

----
8.3 Meeting
Pages:

1. homepage （不登陆也可以看到）LLX
 
 (搜索栏，搜索栏旁边有checkbox，dashborad/log in button)


2. dashoborad（登陆后能看到）Lester
 
 profile（邮箱，余额。。。）我的资料、我的评价，充值，上传资料

3. sign up/log in Dino
 
 (recommand sign up with email, but also support wallet)

4. courserating LSY
 
 (评价，基本信息，选择是否上链，可以点赞和踩，打赏）

5. coursematerials Kevin
 
（文件，可以打赏，点赞，踩，下载（付钱窗口，登陆后可上传））

6.upload Rex
 
（课程名字，年份，价格）

后端：
1.database




  
