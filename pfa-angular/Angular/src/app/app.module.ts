import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';


import { NavigationComponent } from './shared/header-navigation/navigation.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BreadcrumbComponent } from './shared/breadcrumb/breadcrumb.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { Approutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpinnerComponent } from './shared/spinner.component';
import { StarterComponent } from './starter/starter.component';
import { ProduitsComponent } from './produits/produits.component';
import { FournisseursComponent } from './fournisseurs/fournisseurs.component';
import { CommandesComponent } from './commandes/commandes.component';


import { UsersComponent } from './users/users.component';
import { FacturesComponent } from './factures/factures.component';
import { ProduitComponent } from './produits/produit/produit.component';
import { PromotionsComponent } from './promotions/promotions.component';
import {MaterialModule} from './produits/material/material.module';
import {ProduitService} from './produits/service/produit.service';
import { MatTableModule} from '@angular/material/table';
import {
  MatButtonModule, MatGridListModule, MatIconModule,
  MatListModule,
  MatPaginatorModule,
  MatSidenavModule,
  MatSortModule,
  MatToolbarModule
} from '@angular/material';
import { MenuComponent } from './starter/menu/menu.component';
import { LoginComponent } from './starter/login/login.component';
import { FooterComponent } from './starter/footer/footer.component';
import {MatCardModule} from '@angular/material/card';
import { FournisseurComponent } from './fournisseurs/fournisseur/fournisseur.component';
import { AcceuilComponent } from './starter/acceuil/acceuil.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatBadgeModule} from '@angular/material/badge';

import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { ListCommandeComponent } from './starter/list-commande/list-commande.component';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';

import { CookieService } from 'ngx-cookie-service';
import {ChartsModule} from "ng2-charts";
// For MDB Angular Free
import { CarouselModule, WavesModule } from 'angular-bootstrap-md';
import { ListCommandesComponent } from './starter/list-commandes/list-commandes.component';
import { CommandeComponent } from './commandes/commande/commande.component';
import { TelephoneComponent } from './starter/telephone/telephone.component';
import { AccessoireComponent } from './starter/accessoire/accessoire.component';
import { PcComponent } from './starter/pc/pc.component';
import { AdminComponent } from './admin/admin.component';
import {MatTabsModule} from '@angular/material/tabs';
import { NotificationComponent } from './notification/notification.component';
import {MatMenuModule} from '@angular/material/menu';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelSpeed: 2,
  wheelPropagation: true
};

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    FullComponent,
    NavigationComponent,
    BreadcrumbComponent,
    SidebarComponent,
    StarterComponent,
    ProduitsComponent,
    FournisseursComponent,
    CommandesComponent,
    UsersComponent,
    FacturesComponent,
    ProduitComponent,
    PromotionsComponent,
    MenuComponent,
    LoginComponent,
    FooterComponent,
    FournisseurComponent,
    AcceuilComponent,
    ListCommandeComponent,
    ListCommandesComponent,
    CommandeComponent,
    TelephoneComponent,
    AccessoireComponent,
    PcComponent,
    AdminComponent,
    NotificationComponent,


  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(Approutes),
    PerfectScrollbarModule,
    MaterialModule,
    ReactiveFormsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatExpansionModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatGridListModule,
    MatDialogModule,
    CarouselModule, WavesModule,ChartsModule,MatTabsModule,MatMenuModule
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,

    },
    ProduitService,
    CookieService
  ],
  bootstrap: [AppComponent],
  entryComponents:[ListCommandeComponent, ListCommandesComponent, NotificationComponent]
})
export class AppModule {}
