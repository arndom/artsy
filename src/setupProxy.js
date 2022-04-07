/* eslint-disable @typescript-eslint/no-var-requires */

const { createProxyMiddleware } = require('http-proxy-middleware');

const proxyFetch = {
  target: 'http://api.hotpot.ai',
  changeOrigin: true,
  changeOrigin: true,
  pathRewrite: {
    '^/transform': '',
  },
  headers: {
    Connection: 'keep-alive',
  },
};
const proxyImage = {
  target: 'https://hotpotmedia.s3.us-east-2.amazonaws.com',
  changeOrigin: true,
  pathRewrite: {
    '^/image': '',
  },
  headers: {
    Connection: 'keep-alive',
  },
};

module.exports = function (app) {
  app.use('/transform', createProxyMiddleware(proxyFetch));
  app.use('/image', createProxyMiddleware(proxyImage));
};
