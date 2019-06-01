import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ShowAnnoncePage } from './show-annonce.page';

const routes: Routes = [
  {
    path: '',
    component: ShowAnnoncePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ShowAnnoncePage]
})
export class ShowAnnoncePageModule {}
