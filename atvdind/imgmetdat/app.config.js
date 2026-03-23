export default {
  expo: {
    name: 'imageMetaData',
    slug: 'imageMetaData',
    version: '1.0.0',
    orientation: 'portrait',
    newArchEnabled: true,
    plugins: [], 
    ios: {
      supportsTablet: true,
      bundleIdentifier: 'com.lqueiroz.imagemetadata',
      config: {
        googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY_IOS,
      },
      infoPlist: {
        NSLocationWhenInUseUsageDescription: 'Este aplicativo utiliza sua localização para associar dados às imagens.',
      },
    },
    android: {
      package: 'com.lqueiroz.imagemetadata',
      permissions: ['ACCESS_FINE_LOCATION', 'ACCESS_COARSE_LOCATION'],
      config: {
        googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY_ANDROID,
      },
    },
    extra: {
      eas: {
        projectId: "5ef68bf7-6f74-4072-9d74-4eeda77208d7"
      }
    }
  }
};