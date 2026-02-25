
export default {
  expo: {
    name: 'imageMetaData',
    slug: 'imageMetaData',
    version: '1.0.0',
    orientation: 'portrait',
    newArchEnabled: true,
    plugins: ['@rnmapbox/maps'],
    extra: {
      eas: {
        projectId: "5ef68bf7-6f74-4072-9d74-4eeda77208d7"
      }
    },
    ios: {
      supportsTablet: true,
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
