import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.ionic.comet_daily_journal',
  appName: 'comet',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    LocalNotifications: {
      smallIcon: 'ic_comet_notif_icon',
      iconColor: '#46CDCF',
    },
  },
};

export default config;
