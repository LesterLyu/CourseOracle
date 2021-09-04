export const server = {
  address: process.env.NODE_ENV === 'production' ? 'https://co.lesterlyu.com' : 'http://localhost:3001',
};

export const RECEIVER_ADDRESS = process.env.REACT_APP_RECEIVER_ADDRESS || "cfxtest:aaph5gjm3g9muk0r3e5pmka6gsrjnhh5zjpkk104pp"