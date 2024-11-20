import { CapacitorConfig } from '@capacitor/cli';
import config from '@/config';

const capacitorConfig: CapacitorConfig = {
  appId: config.appId ?? 'com.MAHKapps.app',
  appName: config.appName ?? 'MAHKapps',
  webDir: 'out',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    PushNotifications: {
      presentationOptions: ['badge', 'sound', 'alert'],
    },
  },
};

export default capacitorConfig;
