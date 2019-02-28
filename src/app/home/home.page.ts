import { Component } from '@angular/core';
import { LocalNotifications, ELocalNotificationTriggerUnit } from '@ionic-native/local-notifications/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private localNotifications: LocalNotifications) {
    
  }

  registerNotification(seconds: number) {
    this.localNotifications.schedule({
      title: `my ${seconds} notification`,
      text: `my detailed description`,
      trigger: {
        // at: new Date(new Date().getTime() + ms) DOESN'T WORK
        in: seconds,
        unit: ELocalNotificationTriggerUnit.SECOND,
      },
    });
  }
}
