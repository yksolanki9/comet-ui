import { Component } from '@angular/core';
import { LocalNotifications } from '@capacitor/local-notifications';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
    this.scheduleNotifications();
  }

  private async scheduleNotifications() {
    await LocalNotifications.schedule({
      notifications: [
        {
          id: 1,
          title: 'Testing notifications',
          body: 'Please write about your day',
        },
      ],
    });
  }
}
