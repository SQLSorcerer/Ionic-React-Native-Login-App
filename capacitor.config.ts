import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'my_ionic_react_native_app',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
