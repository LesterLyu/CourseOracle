// return true if success, return message string if failed
function checkPasswordFormat(password) {
  if (password.length <= 7)
    return 'At least 8 characters';

  const re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/;
  return re.test(password) ? true : 'At least one number, one lowercase and one uppercase letter';
}

module.exports = {
  checkPasswordFormat,
}