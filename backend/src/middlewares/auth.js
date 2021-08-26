/**
 * Express.js middleware, check is user logged in.
 * If the user is logged in then continue the request, otherwise response the request with a message.
 * @param {string} [message] - message sends back via api
 */
const authMiddleware = (message) => (req, res, next) => {
  // Logged in user has this property
  if (req.session.email) {
    next();
  } else {
    res.json({error: true, code: 2, message: message || 'Authentication required.'})
  }
};

module.exports = {authMiddleware};
