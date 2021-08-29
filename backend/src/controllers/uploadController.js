const {UploadFile} = require('../models/uploadFile');


async function receiveFileUpload(req, res, next) {
  try {
    const id = await UploadFile.save(req, req.params.filename, req.get('content-type'));
    res.json({success: true, id});
  } catch (e) {
    next(e);
  }
}

async function deleteUploadedFile(req, res, next) {
  const {fileId} = req.params;

  try {
    await UploadFile.delete(fileId);
    return res.json({success: true});
  } catch (e) {
    next(e);
  }

}


async function getFile(req, res, next) {
  const {fileId} = req.params;

  try {
    const {contentType, readStream} = await UploadFile.getFile(fileId);
    if (readStream) {
      res.set('Content-Type', contentType);
      readStream.pipe(res).on('error', function (err) {
        res.json({error: err});
      })
    } else {
      res.status(404).send('The requested file does not exist.');
    }
  } catch (e) {
    next(e);
  }
}

module.exports = {receiveFileUpload, deleteUploadedFile, getFile}