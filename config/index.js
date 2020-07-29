import dotenv from 'dotenv';

dotenv.config();

const config = {
  PORT: process.env.PORT,
  AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
};

export default config;
