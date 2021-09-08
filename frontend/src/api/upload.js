import {server} from '../config';

/**
 *
 * @param {File} file
 * @param {function} onProgress
 * @returns {[Promise<*>, XMLHttpRequest]}
 */
export const uploadFile = (file, onProgress = () => {}) => {
  const xhr = new XMLHttpRequest();

  return [new Promise((resolve) => {
    xhr.withCredentials = true;
    xhr.open('POST', `${server.address}/api/upload/${file.name}`);
    xhr.setRequestHeader('content-type', file.type);
    xhr.onload = function () {
      resolve(JSON.parse(this.response));
    };
    xhr.upload.addEventListener('progress', e => {
      onProgress(e.loaded / e.total);
    })
    xhr.send(file);
  }), xhr];
};

export const downloadFile = async (id, fileName) => {
  const res = await fetch(`${server.address}/api/upload/${id}`, {credentials: 'include'});
  console.log(res);
  const blob = await res.blob();
  if (window.navigator && window.navigator.msSaveOrOpenBlob) {
    // If IE, you must uses a different method.
    window.navigator.msSaveOrOpenBlob(blob, fileName);
  } else {
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    document.body.appendChild(a);
    a.style.display = "none";
    a.href = url;
    a.download = fileName;
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  }
}
