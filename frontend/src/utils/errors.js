export class SessionExpiredError extends Error {
  constructor() {
    super('Login Session Expired. Redirecting to login page.');
  }
}