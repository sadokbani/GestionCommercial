import { Component, OnInit } from '@angular/core';
import {Facture} from "../starter/list-commandes/list-commandes.component";
import {FactService} from "../starter/list-commandes/service/fact.service";
import {CommandeService} from "../starter/list-commande/service/commande.service";
import * as jsPDF from "jspdf";





/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-factures',
  templateUrl: './factures.component.html',
  styleUrls: ['./factures.component.css']
})
export class FacturesComponent implements OnInit {
  displayedColumns: string[] = ['factId', 'dateFact', 'total', 'commandeId', 'detail'];
  dataSource :Facture[]=[];
  a:Facture[]=[];

  constructor(private factService: FactService,
              private commandeService: CommandeService) {}

  ngOnInit() {
    this.factService.getAllFact().subscribe(
      data =>{


        for (let i = 0; i <data.length ; i++) {
          if (data[i].commandeId.etat == 1) {
            this.a.push(data[i]);
          }
        }
        this.dataSource=this.a;

      }
    );

  }

  detail(a){
    console.log(a);
    this.commandeService.getLigneCommande(a).subscribe(
      data =>{
        let x=0;
        const doc = new jsPDF();
        let b= new Date(data[0].commande.date);
        let total:number=0;

        //doc.setTextColor(255,0,0);
        // if(c == 'facture'){
        //   doc.text('Facture',80,30);
        //
        // } else{
        //   doc.text('Devis',80,30);
        //
        // }

        doc.setFontSize(16);
        // doc.setTextColor(0,0,0);
        doc.text('Commande effectuée a : ',20,60);
        doc.text(b.toDateString(),80,60);
        // doc.setTextColor(0,230,0);
        doc.text('Nom',20,90);
        doc.text('Prix',90,90);
        doc.text('Quantite',140,90);
        for (let i:number=0; i<data.length; i++){
          total+=  data[i].quantite * data[i].produit.prix;
          // doc.setTextColor(0,0,0);
          doc.text(data[i].produit.nom.toString(),20,110*(i/5+1));
          doc.text(data[i].produit.prix.toString()+' DT',90,110*(i/5+1));
          doc.text(data[i].quantite.toString(),140,110*(i/5+1));
          // doc.text(b.toDateString(),130,30*(i+1));
          x=110*(i/5+1);
        }
        //doc.addImage("./assets/img/cla.jpg", 'JPG', 15, 40, 180, 160);

        doc.setFontSize(40);
        doc.text('Total',140,x+30);
        doc.setFontSize(20);
        doc.text(total.toString()+' DT',145,x+50);
        doc.setFontSize(50);

          doc.text('Facture',80,30);
          doc.save('facture '+data[0].commande.commandeId+'.pdf');

      }
    )
  }
}
