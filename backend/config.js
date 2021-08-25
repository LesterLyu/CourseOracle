const isProduction = process.env.NODE_ENV === 'production';

if (isProduction)
  console.log('In production mode.')

module.exports = {
  mongodb: {
    addr: isProduction ? 'mongodb://localhost:27017/cmmp' : `mongodb://localhost:27017/${process.env.test ? "cmmpTest" : "cmmp"}`
  },
  // pbkdf2 configuration, ~70ms with this config
  passwordHashing: {
    digest: 'sha512',
    iterations: 100000, // 100,000 is sufficient
    hashSize: 64, // in bytes
    saltSize: 32  // in bytes
  },

  cookieSession: {
    keys: ['secret', 'keys'],
    maxAge: 24 * 60 * 60 * 1000 // expires in 24 hours
  },

  allowedOrigins:  ['http://localhost:3000', 'http://localhost:3002'],
}