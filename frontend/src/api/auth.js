import { postJson, getJson, putJson } from "./helpers";

export const login = async (email, password) => {
  return await postJson('/api/login', {email, password});
};

export const register = async (data) => {
  return await postJson('/api/register', data);
};

export const logout = async () => {
  return await postJson('/api/logout');
}
