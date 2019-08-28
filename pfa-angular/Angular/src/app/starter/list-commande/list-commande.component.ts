import { Component, OnInit } from '@angular/core';
import {CookieService} from "ngx-cookie-service";
import {Prodd} from "../acceuil/acceuil.component";
import {MatDialogRef} from "@angular/material";
import {CommandeService} from "./service/commande.service";
import {User} from "../../users/users.component";
import {Prod} from "../../produits/produit/produit.component";
import {Router} from "@angular/router";

export class Userr {
  constructor(
    public userId?: number,
    public nom?: string,
    public prenom?: string,
    public telephone?: string,
    public pays?: string,
    public adresse?: string,
    public password?: string,
    public grade?: number
  ) {} }

export class Commande {
 constructor(
    public date?:Date,
    public etat?: number,
    public userId?: Userr
  ) {}
}
export class Comm{
 constructor(
   public commandeId?:number,
    public date?:Date,
    public etat?: number,
    public userId?: Userr
  ) {}
}

export class LigneCommande {
  constructor(
    public LignedecommandePK?:{prodId:number, commandeId: number},
    public quantite?:number,
    public produit?:Prod,
    public commande?:Comm
  ){}

}


@Component({
  selector: 'app-list-commande',
  templateUrl: './list-commande.component.html',
  styleUrls: ['./list-commande.component.css']
})

export class ListCommandeComponent implements OnInit {
listProduits:Prodd[]= [];
  valide = false;
  user:Userr;
  btn= false;
  commande = new Commande();
  com= new Comm();
  numbers;
  constructor(private cookieService: CookieService,
              public dialogRef: MatDialogRef<ListCommandeComponent>,
              private commandeService: CommandeService,
              private route: Router) {

  }

  ngOnInit() {
    this.numbers = Array(100).fill(1).map((x,i)=>i);
    console.log(this.numbers);
    this.user=JSON.parse(sessionStorage.getItem('User'));
    this.listProduit();
  }
  i=1;

  listProduit(){

    while (this.cookieService.check(this.i.toString())) {
      //console.log(JSON.parse(this.cookieService.getAll()[this.i.toString()]));
      this.listProduits.push(JSON.parse(this.cookieService.getAll()[this.i.toString()]));
      this.i++;
      this.btn=true;
    }
    //console.log('list prod');
    //console.log(this.listProduits);
  }

  removee(){
    this.cookieService.deleteAll();
    this.listProduits= [];
    this.btn= false;
    this.dialogRef.close();
   this.route.navigate(['/']);
  //  location.reload();

  }

  total(){
    let x=0;
    for (let i=0;i<this.listProduits.length;i++){

      x+=  this.listProduits[i].quantite * this.listProduits[i].prix;
    }
    if(x>0 && this.user !=null) this.valide=true;
    return x;
  }

  ajouterCommande(){
    if(this.valide){
      this.commande= new Commande(new Date(),0,this.user);
      this.commandeService.ajoutCommande(this.commande).subscribe(
        data => {
          this.com= <Comm>data;
          let fact:{dateFact:Date,total:number,commandeId:{commandeId:number} };
          fact={dateFact:new Date(),total:this.total(),commandeId:{commandeId:this.com.commandeId}};
          let devis:{dateDevis:Date,total:number,commandeId:{commandeId:number} };
          devis={dateDevis:new Date(),total:this.total(),commandeId:{commandeId:this.com.commandeId}};
          this.commandeService.ajoutFacture(fact).subscribe(
            response => {console.log(response);}
          );
          this.commandeService.ajoutDevis(devis).subscribe(
            response => {
              console.log('aaaaaaa');
              console.log(response);
            }
          );
          for (let i=0;i<this.listProduits.length;i++){
            let x : {lignedecommandePK:{prodId:number, commandeId: number},quantite:number};
            x= {lignedecommandePK: {prodId:this.listProduits[i].prodId, commandeId:this.com.commandeId}, quantite:this.listProduits[i].quantite};
            console.log(x);
            this.commandeService.ajoutLigneCommande(x).subscribe(
              response => {console.log(response);},
              error => {
                console.log('aaaaaaa ligne');
              }
            );


          }
        },
        error => {
          console.log('aaaaaaa erreru');
        });
      this.dialogRef.close();
    }
    else {
      this.dialogRef.close();
      this.route.navigate(['/login']);
    }

  }
}
