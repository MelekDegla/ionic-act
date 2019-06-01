import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'annonce',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  {
    path: 'annonce',
    loadChildren: './annonce/annonce.module#AnnoncePageModule'
  },
  {
    path: 'show-annonce/:id',
    loadChildren: './show-annonce/show-annonce.module#ShowAnnoncePageModule'
  },
  {
    path: 'form',
    loadChildren: './form/form.module#FormPageModule'
  },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginPageModule' 
  },
  { path: 'reclamation', 
  loadChildren: './reclamation/reclamation.module#ReclamationPageModule' },
  
  { path: 'demande',
   loadChildren: './demande/demande.module#DemandePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
