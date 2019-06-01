import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  public appPages = [
    {
      title: "Fil d'actualité",
      url: '/annonce',
      icon: 'home'
    },
    {
      title: 'Profile',
      url: '/home',
      icon: 'person'
    },
    {
      title: 'Demande de congé',
      url: '/demande',
      icon: 'today'
    },
    {
      title: 'Reclamation',
      url: '/reclamation',
      icon: 'paper'
    },
    {
      title: 'Déconnexion',
      url: '/form',
      icon: 'exit'
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
