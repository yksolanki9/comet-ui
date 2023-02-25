import { Injectable } from '@angular/core';
import { LocalNotifications } from '@capacitor/local-notifications';

@Injectable({
  providedIn: 'root',
})
export class ReminderService {
  constructor() {}

  async setDailyReminder(callbackFn: () => void) {
    try {
      //Delete all existing reminders
      if ((await LocalNotifications.getPending())?.notifications?.length) {
        await LocalNotifications.cancel({ notifications: [{ id: 1 }] });
        LocalNotifications.removeAllListeners();
      }

      //Check if user has given notif permission
      await LocalNotifications.requestPermissions();

      //Setup new reminders
      this.setupNotification();

      //Define listener for notif action
      LocalNotifications.addListener(
        'localNotificationActionPerformed',
        callbackFn
      );
    } catch (err) {
      console.log('Err', err);
    }
  }

  private async setupNotification() {
    await LocalNotifications.schedule({
      notifications: [
        {
          id: 1,
          title: 'How was your day?',
          body: `Capture your memories and ideas by journaling every day. You'll be glad you did!`,
          schedule: {
            at: new Date(this.getStartDate().setHours(22, 0, 0, 0)),
            repeats: true,
            every: 'day',
            count: 99999999,
          },
        },
      ],
    });
  }

  private getStartDate(): Date {
    const startNotifFromToday = new Date().getHours() <= 20;
    return startNotifFromToday
      ? new Date()
      : new Date(new Date().setDate(new Date().getDate() + 1));
  }
}
