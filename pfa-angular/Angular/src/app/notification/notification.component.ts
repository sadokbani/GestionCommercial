import { Component, OnInit } from '@angular/core';
import {ProduitService} from "../produits/service/produit.service";
import {Prod} from "../produits/produit/produit.component";
import {Router} from "@angular/router";
import {MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  produit = [];
  a=[];
  constructor(private produitService: ProduitService,
              private router: Router,
              private diag: MatDialogRef<NotificationComponent>) { }

  ngOnInit() {
    this.produitService.retrieveAllProduits().subscribe(
      data =>{
        console.log(data);
        for (let i = 0; i <data.length ; i++) {
          if (data[i].quantiteStock<5 && data[i].quantiteStock>0) {
            console.log(data[i]);
            this.produit.push(data[i])
          }
          if (data[i].quantiteStock==0) {
            console.log(data[i]);
            this.a.push(data[i])
          }
        }
      }
    );
  }

  details(a){
    this.router.navigate(['/admin/produit', a]);
    this.diag.close();
  }

}
