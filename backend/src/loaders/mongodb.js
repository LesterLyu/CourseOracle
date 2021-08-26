const mongoose = require('mongoose');
const {createModel} = require('mongoose-gridfs');

const config = require('../../config');
const {sleep} = require('../utils')

const db = mongoose.connection;
let Attachment;

async function load() {
  try {
    await mongoose.connect(config.mongodb.addr, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
  } catch (e) {
    console.error('MongoDB connection error:');
    console.error(e);
  }
  // we're connected!
  console.log('MongoDB connected.')

  // initialize GridFS
  Attachment = createModel({
    modelName: 'Attachment',
    connection: db
  });

}

/**
 * Get the GridFs Attachment model.
 * @returns {Promise<FileSchema>}
 */
async function getAttachment() {
  while (!Attachment) {
    await sleep(100);
  }
  return Attachment;
}

module.exports = {
  getAttachment, db, load
};
