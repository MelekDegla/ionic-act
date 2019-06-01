import { Component, OnInit } from '@angular/core';
import { Actualite } from '../models/actualite.model';
import { NavController } from '@ionic/angular';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AnnonceService} from '../services/annonce.service';


@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.page.html',
  styleUrls: ['./annonce.page.scss'],
})
export class AnnoncePage implements OnInit {

  aActualite: Actualite[];
  constructor(private navCtrl: NavController, private annonceService: AnnonceService, private http: HttpClient) {
  }

  ngOnInit() {
    // @ts-ignore
      this.annonceService.findAll5().subscribe(r => this.aActualite = r);
  }



}
