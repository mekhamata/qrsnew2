/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// };

module.exports = {
  i18n,
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['qrs-global.com'],
  },
  optimizeFonts: false,
};
