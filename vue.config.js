module.exports = {
  pwa: {
    name: 'EduGaming',
    themeColor: '#3A55B4',
    msTileColor: '#3A55B4',
    appleMobileWebAppCapable: 'yes',
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'src/service-worker.js'
    },
  }
}
