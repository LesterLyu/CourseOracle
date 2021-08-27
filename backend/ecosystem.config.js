module.exports = {
  apps: [{
    name: "co-backend",
    script: "src/index.js",
    watch: false,
    exec_mode  : "cluster",
    instances  : "1", // this should match the cpu cores
    // Delay between restart
    watch_delay: 1000,
    env: {
      NODE_ENV: "production",
      DOCKER: true,
    }
  }]
}