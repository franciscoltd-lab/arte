import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'arte',
  server: {
    url: 'http://192.168.1.82:4200',
    cleartext: true // necesario para Android
  },
  webDir: 'www'
};

export default config;
