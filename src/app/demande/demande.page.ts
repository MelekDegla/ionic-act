import { Component, OnInit } from '@angular/core';
import {AlertController } from '@ionic/angular';

@Component({
  selector: 'app-demande',
  templateUrl: './demande.page.html',
  styleUrls: ['./demande.page.scss'],
})
export class DemandePage implements OnInit {

  constructor(public alertCtrl: AlertController){}
  async alertAction(): Promise<void> {
    const alert = await this.alertCtrl.create({
      header: 'Envoyée',
      message: 'La demande de congé a été envoyé avec succès',
      buttons: ['OK']
    });

    await alert.present();
  }

  ngOnInit() {
  }

}
