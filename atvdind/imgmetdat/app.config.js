import 'dotenv/config';

export default {
  expo: {
    name: 'imageMetaData',
    slug: 'imageMetaData',
    version: '1.0.0',
    newArchEnabled: true,
    ios: {
      bundleIdentifier: 'com.lqueiroz.imagemetadata',
      config: {
        googleMapsApiKey: process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY_IOS,
      },
    },
    android: {
      package: 'com.lqueiroz.imagemetadata',
      config: {
        // A estrutura que funcionou no JSON, mas agora com a variável
        googleMaps: {
          apiKey: process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY_ANDROID 
        }
      },
      permissions: ['ACCESS_FINE_LOCATION', 'ACCESS_COARSE_LOCATION'],
    },
    extra: {
      eas: {
        projectId: "5ef68bf7-6f74-4072-9d74-4eeda77208d7"
      }
    }
  }
};