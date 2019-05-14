import {AfterViewChecked, Component, OnInit} from '@angular/core';
import {ProduitService} from '../../produits/service/produit.service';
import {CookieService} from "ngx-cookie-service";
import {Fournisseur} from "../../fournisseurs/fournisseurs.component";

export class Prodd {
  constructor (
    public prodId?:number,
    public nom?: string,
    public categorie?: string,
    public description?: string,
    public prix?: number,
    public quantiteStock?: number,
    public image?: string,
    public fourId?: Fournisseur,
    public quantite?:number,
    public valide?:boolean) {}
}
@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit, AfterViewChecked {

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
        this.prod = response;
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
