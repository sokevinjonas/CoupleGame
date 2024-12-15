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
    this.showSplash();
    StatusBar.setBackgroundColor({ color: '#ff1493' });
  }

  async showSplash(): Promise<void> {
    await SplashScreen.show({
      autoHide: false,
    });
  }
}
