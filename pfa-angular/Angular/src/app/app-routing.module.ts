import { Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import {StarterComponent} from './starter/starter.component';
import {ProduitsComponent} from './produits/produits.component';
import {FournisseursComponent} from './fournisseurs/fournisseurs.component';
import {CommandesComponent} from './commandes/commandes.component';
import {FacturesComponent} from './factures/factures.component';
import {UsersComponent} from './users/users.component';
import {PromotionsComponent} from './promotions/promotions.component';
import {ProduitComponent} from './produits/produit/produit.component';
import {LoginComponent} from './starter/login/login.component';
import {FournisseurComponent} from './fournisseurs/fournisseur/fournisseur.component';
import {AcceuilComponent} from './starter/acceuil/acceuil.component';
import {AuthGaurdService} from "./auth-gaurd.service";
import {CommandeComponent} from "./commandes/commande/commande.component";
import {TelephoneComponent} from "./starter/telephone/telephone.component";
import {AccessoireComponent} from "./starter/accessoire/accessoire.component";
import {PcComponent} from "./starter/pc/pc.component";
import {AdminComponent} from "./admin/admin.component";

export const Approutes: Routes = [
  { path: '', component : StarterComponent , children : [
      { path: 'login', component : LoginComponent },
      { path: 'telephone', component : TelephoneComponent },
      { path: 'accessoire', component : AccessoireComponent },
      { path: 'pc', component : PcComponent },
      { path: 'inscription', component : UsersComponent },
      { path: '', component : AcceuilComponent }
      ] },
  { path: 'admin', component : FullComponent ,canActivate:[AuthGaurdService] , children : [
      {  path : 'produits' , component : ProduitsComponent},
      {  path : 'stat' , component : AdminComponent},
      {  path : 'produit/:id' , component : ProduitComponent},
      {  path : 'commande/:id' , component : CommandeComponent},
      { path: 'fournisseurs' , component : FournisseursComponent},
      { path: 'fournisseur/:id' , component : FournisseurComponent},
      { path: 'commandes' , component : CommandesComponent},
      { path: 'factures' , component : FacturesComponent},
      { path: 'promotions' , component : PromotionsComponent},
      { path: 'users' , component : UsersComponent}
    ] },



  //   path: '',
  //   component: FullComponent,
  //   children: [
  //     { path: '', redirectTo: '/starter', pathMatch: 'full' },
  //     {
  //       path: 'starter',
  //       loadChildren: './starter/starter.module#StarterModule'
  //     },
  //     {
  //       path: 'component',
  //       loadChildren: './component/component.module#ComponentsModule'
  //     }
  //   ]
  // },
  // {
  //   path: '**',
  //   redirectTo: '/starter'

];
