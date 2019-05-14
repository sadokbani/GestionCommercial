import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {ListCommandeComponent} from "../list-commande/list-commande.component";
import {AuthenticationService} from "../login/authentication.service";
import {CookieService} from "ngx-cookie-service";
import {ListCommandesComponent} from "../list-commandes/list-commandes.component";
import {User} from "../../users/users.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  admin=false;
  user:User;
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,
              private dialog: MatDialog,
              private dialogg: MatDialog,
              private loginService:AuthenticationService,
              private cookieService: CookieService,
              private router: Router) {
    iconRegistry.addSvgIcon(
      'thumbs-up',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icon/cart.svg'));
  }
  ngOnInit() {


    this.user=JSON.parse(sessionStorage.getItem('User'));
    if(this.user != null){this.isAdmin();}

  }

  listCommande(){
   const dialogConfig= new MatDialogConfig();
    // dialogConfig.disableClose = true;
    // dialogConfig.autoFocus = true;
   dialogConfig.width = "50%";
    this.dialogg.open(ListCommandesComponent, dialogConfig);
    //this.dialog.open(ListCommandesComponent);
  }
  onCreatee(){
    const dialogConfig= new MatDialogConfig();
    // dialogConfig.disableClose = true;
    // dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(ListCommandeComponent, dialogConfig);
    //this.dialog.open(ListCommandeComponent);
  }

  listProduit(){
    let i=1;
    while (this.cookieService.getAll()[i.toString()]) {

      i++;
    }
return i-1;
  }

  isAdmin(){
    if(this.user.grade == 1 ){
      this.admin = true;
    }else{
      this.admin = false;
    }

  }

  logout(){
  sessionStorage.removeItem('User');
  this.router.navigate(['']);
  this.admin = false;
}
}



