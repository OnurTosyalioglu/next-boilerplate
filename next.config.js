const { i18n } = require('./next-i18next.config')
const { pwa } = require('./next-pwa.config')
const NextPWA = require('next-pwa')

module.exports = NextPWA({
  i18n,
  pwa,
  images: {
    domains: [ process.env.NEXT_PUBLIC_IMAGES],
  },
})
