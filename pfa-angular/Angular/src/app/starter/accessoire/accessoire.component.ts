import {AfterViewChecked, Component, OnInit} from '@angular/core';
import {Prodd} from "../acceuil/acceuil.component";
import {ProduitService} from "../../produits/service/produit.service";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-accessoire',
  templateUrl: './accessoire.component.html',
  styleUrls: ['./accessoire.component.css']
})
export class AccessoireComponent implements OnInit , AfterViewChecked {
  i:number=0;
  prod: Prodd[]=[];
  listProduits:Prodd[]= [];
  constructor(private produitService: ProduitService,
              private cookieService: CookieService) { }

  ngOnInit() {
    this.refrechProduits();
    this.listProduit();
  }
  ngAfterViewChecked() {
    if (!this.cookieService.check('1')) {

      for (let i = 0; i < this.prod.length; i++) {
        this.prod[i].valide = false;
      }

    }
  }
  listProduit(){
    let x=1;
    while (this.cookieService.getAll()[x.toString()]) {
      // console.log(JSON.parse(this.cookieService.getAll()[x.toString()]));
      this.listProduits.push(JSON.parse(this.cookieService.getAll()[x.toString()]));
      x++;
    }

    return x;
  }
  refrechProduits() {
    this.produitService.retrieveAllProduitsV().subscribe(
      response => {
        console.log(response);
        for (let i=0;i<response.length;i++){
          if(response[i].categorie.toLowerCase()=='accessoire'){
            this.prod.push(response[i])
          }
        }
        //this.prod = response;
        if (!this.cookieService.check('1')) {

          for (let i = 0; i < this.prod.length; i++) {
            this.prod[i].valide = false;
          }

        }
        else {
          for (let y=0; y< this.listProduits.length;y++){
            if(this.prod.find(x => x.prodId == this.listProduits[y].prodId)){
              this.prod.find(x => x.prodId == this.listProduits[y].prodId).valide=true;
            }
          }
        }
      }
    );


  }

  add(produit){
    if (!this.cookieService.check('1')) {
      this.i=0;
    }
    else {this.i=this.listProduit()-1;}
    this.i++;
    this.cookieService.set(this.i.toString(), JSON.stringify(produit));

    console.log('deb');
    console.log(this.prod.find(x => x.prodId == produit.prodId));
    console.log('fin');
    this.prod.find(x => x.prodId == produit.prodId).valide = true;


  }

}
