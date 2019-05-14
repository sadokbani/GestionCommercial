import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route, Router} from "@angular/router";
import {CommandeService} from "../../starter/list-commande/service/commande.service";
import {ProduitService} from "../../produits/service/produit.service";

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {
  id:number;
  ligneCommande: any[]= [];

  constructor(private route: ActivatedRoute,
              private commandeService: CommandeService,
              private router:Router,
              private produitService: ProduitService) { }
  displayedColumns: string[] = ['image', 'categorie', 'nom', 'qunatite'];
  dataSource = [];
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.commandeService.getLigne(this.id).subscribe(
      data => {
        console.log(data);
        this.dataSource=data;
      } );

  }

  isValide(){
    let x = false;
    for(let i=0;i<this.dataSource.length;i++){
      if(this.dataSource[i].quantite>this.dataSource[i].produit.quantiteStock){
        x=true;
      }
    }
    return x ;
  }

  accepter(){
    this.commandeService.updateCommande(this.id,{etat:1}).subscribe(
      data =>{
        console.log(data);
        for(let i=0;i<this.dataSource.length;i++){
          this.produitService.updateProduit(this.dataSource[i].produit.prodId,{quantiteStock:this.dataSource[i].produit.quantiteStock-this.dataSource[i].quantite}).subscribe(
            data=>{
              console.log(data);
            }
          );
        }
        this.router.navigate(['/admin/commandes']);

      }
    );
  }

  isAccepter(){
    for(let i=0;i<this.dataSource.length;i++){
            return this.dataSource[i].commande.etat == 1;
        }

  }

}
