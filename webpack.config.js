/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const dotenv = require('dotenv').config({ path: __dirname + '/.env' });
const isDevelopment = process.env.NODE_ENV !== 'production';

export const plugins = [
  new webpack.DefinePlugin({
    'process.env': JSON.stringify(dotenv.parsed),
    'process.env.NODE_ENV': JSON.stringify(
      isDevelopment ? 'development' : 'production',
    ),
  }),
].filter(Boolean);
