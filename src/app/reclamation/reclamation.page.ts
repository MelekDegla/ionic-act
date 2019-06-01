import { Component, OnInit } from '@angular/core';
import {AlertController } from '@ionic/angular';

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.page.html',
  styleUrls: ['./reclamation.page.scss'],
})
export class ReclamationPage implements OnInit {

  constructor(public alertCtrl: AlertController){}
  async alertAction(): Promise<void> {
    const alert = await this.alertCtrl.create({
      header: 'Envoyée',
      message: 'La reclamation a été envoyé avec succès',
      buttons: ['OK']
    });

    await alert.present();
  }

  ngOnInit() {
  }

}
