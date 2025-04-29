/** @type {import('next-i18next').UserConfig} */
module.exports = {
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja', 'en', 'tr', 'zh'],
    localeDetection: true,
  },
  defaultNS: 'translation',
  localePath: './public/locales',
} 