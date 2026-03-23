export default {
  expo: {
    name: 'imageMetaData',
    slug: 'imageMetaData',
    version: '1.0.0',
    orientation: 'portrait',
    newArchEnabled: true,
    plugins: [
      [
        '@rnmapbox/maps',
        {
          RNMapboxMapsImpl: 'mapbox',
          RNMapboxMapsDownloadToken: process.env.MAPBOX_ACCESS_TOKEN 
        }
      ]
    ],
    extra: {
      mapboxToken: process.env.MAPBOX_ACCESS_TOKEN,
      eas: {
        projectId: "5ef68bf7-6f74-4072-9d74-4eeda77208d7"
      }
    },
    ios: {
      supportsTablet: true,
      bundleIdentifier: 'com.lqueiroz.imagemetadata',
      infoPlist: {
        NSLocationWhenInUseUsageDescription:
          'Este aplicativo utiliza sua localizacao para associar dados as imagens.',
        NSLocationAlwaysAndWhenInUseUsageDescription:
          'Sua localizacao e usada para adicionar metadados as imagens.',
      },
    },
    android: {
      package: 'com.lqueiroz.imagemetadata',
      permissions: ['ACCESS_FINE_LOCATION', 'ACCESS_COARSE_LOCATION'],
    }
  }
};