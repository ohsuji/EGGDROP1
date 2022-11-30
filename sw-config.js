module.exports = {
  staticFileGlobs: [
    '*.html',
    'scss/**.css',
    'images/**.*',
    'imag/**.*',
    'js/*.js'
  ],
  stripPrefix: 'app/',
  runtimeCaching: [{
    urlPattern: /this\\.is\\.a\\.regex/,
    handler: 'networkFirst'
  }]
};