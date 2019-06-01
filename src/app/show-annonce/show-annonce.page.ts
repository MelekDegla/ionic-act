import { Component, OnInit } from '@angular/core';
import { Actualite } from '../models/actualite.model';
import { ActivatedRoute } from '@angular/router';
import {AnnonceService} from '../services/annonce.service';
@Component({
  selector: 'app-show-annonce',
  templateUrl: './show-annonce.page.html',
  styleUrls: ['./show-annonce.page.scss'],
})
export class ShowAnnoncePage implements OnInit {
id: string;
annonce: Actualite;

  constructor(
              private annonceService: AnnonceService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.annonce = new Actualite('', '', '', '');
    this.id = this.route.snapshot.paramMap.get('id');
    this.annonceService.findone(this.id).subscribe(result => this.annonce = result);
  }

}
