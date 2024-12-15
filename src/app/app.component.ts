import { Component } from '@angular/core';
import { SplashScreen } from '@capacitor/splash-screen';
import { StatusBar } from '@capacitor/status-bar';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
    StatusBar.setBackgroundColor({ color: '#ff69b4' });
    this.showSplash();
  }

  async showSplash() {
    await SplashScreen.show({
      showDuration: 2000,
      autoHide: true,
    });
  }
}
