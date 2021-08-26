class APIError extends Error {
  /**
   *
   * @param {Number} statusCode
   * @param {string} message
   * @param {*} [details]
   */
  constructor(statusCode, message, details) {
    super(message);
    this.statusCode = statusCode;
    this.details = details;
  }
}

module.exports = {
  APIError
}
