import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import {AuthenticationService} from "../../starter/login/authentication.service";
import {MatDialog, MatDialogConfig} from "@angular/material";
import {ListCommandeComponent} from "../../starter/list-commande/list-commande.component";
import {NotificationComponent} from "../../notification/notification.component";
import {ProduitService} from "../../produits/service/produit.service";

@Component({
  selector: 'app-full-layout',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.scss']
})
export class FullComponent implements OnInit {
  color = 'defaultdark';
  showSettings = false;
  showMinisidebar = false;
  showDarktheme = false;
  notifNb=0;
  public innerWidth: any;

  public config: PerfectScrollbarConfigInterface = {};

  constructor(public router: Router,
              private loginService:AuthenticationService,
              private dialog: MatDialog,
              private produitSer:ProduitService) {}

  ngOnInit() {
    if (this.router.url === '/') {
      this.router.navigate(['/dashboard/dashboard1']);
    }
    this.handleLayout();
    this.produitSer.retrieveAllProduits().subscribe(
      data=>{
        for (let i = 0; i <data.length ; i++) {
          if(data[i].quantiteStock<5){
            this.notifNb+=1;
          }

        }
        console.log(this.notifNb);
      }
    )
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.handleLayout();
  }

  toggleSidebar() {
    this.showMinisidebar = !this.showMinisidebar;
  }

  handleLayout() {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth < 1170) {
      this.showMinisidebar = true;
    } else {
      this.showMinisidebar = false;
    }
  }

  notification(){
    const dialogConfig= new MatDialogConfig();
    // dialogConfig.disableClose = true;
    // dialogConfig.autoFocus = true;
    dialogConfig.maxHeight=window.innerHeight-50 + 'px';

    dialogConfig.width = "50%";
    this.dialog.open(NotificationComponent, dialogConfig);
  }
}
