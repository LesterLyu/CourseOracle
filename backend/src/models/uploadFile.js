const {ObjectId} = require('mongoose').Types;
const {getAttachment} = require('../loaders/mongodb');

class UploadFile {

  /**
   *
   * @param readStream - `req`
   * @param {string} filename
   * @param {string} contentType
   * @return {Promise<ObjectId>}
   */
  static async save(readStream, filename, contentType) {
    const Attachment = await getAttachment();
    let closedByServer;

    /**
     * @type mongodb.GridFSBucketWriteStream
     * @see https://mongodb.github.io/node-mongodb-native/2.1/api/GridFSBucketWriteStream.html
     */
    const writeStream = Attachment.bucket.writeFile({
      filename,
      contentType,
      chunkSizeBytes: 2 * 1024 * 1024
    }, readStream);

    return new Promise((resolve, reject) => {

      // Only return the id if the file is successfully stored
      writeStream.on('finish', async (file) => {
        closedByServer = true;
        resolve(file._id);
      });

      writeStream.on('error', reject);

      // If the client or server aborted the request
      readStream.on('close', () => {
        // If the client aborted the connection, abort the write steam.
        // This will also cleanup the data already wrote to MongoDB.
        if (!closedByServer)
          writeStream.abort();
      });

      readStream.on('error', reject);
    });
  }

  /**
   * Delete an upload from MongoDB.
   *
   * @param {string} fileId ObjectId
   * @return {Promise<void>}
   */
  static async delete(fileId) {
    const Attachment = await getAttachment();

    return new Promise(async (resolve, reject) => {
      Attachment.bucket.deleteFile(ObjectId(fileId), async error => {
        if (error)
          reject(error);
        else {
          resolve();
        }
      });
    });
  }

  /**
   *
   * @param {string} fileId
   * @return {Promise<{readStream: *, contentType: *}>}
   */
  static async getFile(fileId) {
    const Attachment = await getAttachment();
    const file = await Attachment.findById(fileId);
    if (file) {
      return {
        contentType: file.contentType,
        readStream: Attachment.bucket.readFile({_id: ObjectId(fileId)}),
      }
    } else {
      return {
        contentType: null,
        readStream: null,
      }
    }
  }
}

module.exports = {
  UploadFile, getAttachment
}
