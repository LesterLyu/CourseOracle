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
docker compose -f ./docker-compose-dev.yaml up -d mongodb
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

