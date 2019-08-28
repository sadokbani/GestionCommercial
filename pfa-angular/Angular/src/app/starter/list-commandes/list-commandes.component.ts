import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CommandeService} from "../list-commande/service/commande.service";
import {Comm, Userr} from "../list-commande/list-commande.component";
import * as jsPDF from 'jspdf';
import {Prod} from "../../produits/produit/produit.component";
import {FactService} from "./service/fact.service";
import {MatDialog, MatDialogConfig, MatDialogRef} from "@angular/material";

export class Facture {
  constructor(
    public factId?:number,
    public dateFact?:Date,
    public total?:number,
    public commandeId?:Comm
  ){}
}

export class Devis {
  constructor(
    public devisId?:number,
    public dateDevis?:Date,
    public total?:number,
    public commandeId?:Comm
  ){}
}


@Component({
  selector: 'app-list-commandes',
  templateUrl: './list-commandes.component.html',
  styleUrls: ['./list-commandes.component.css']
})


export class ListCommandesComponent implements OnInit {
  user:Userr;
  listCommande:Comm[]= [];
  ligneCommande: any[]= [];
  @ViewChild('content') content: ElementRef;

  constructor(private commandeService: CommandeService,
              private factService: FactService,
              public dialogRef: MatDialogRef<ListCommandesComponent>,
              private dialog: MatDialog) { }

  ngOnInit() {
    this.user=JSON.parse(sessionStorage.getItem('User'));
    this.refrech();
  }

  refrech(){
    this.commandeService.getCommande(this.user.userId).subscribe(
      response => {
        //console.log(response);
        this.listCommande= response;
        for(let i=0;i<this.listCommande.length;i++){
          this.commandeService.getLigne(this.listCommande[i].commandeId).subscribe(
            data => {
              console.log(data);
              this.ligneCommande.push(data);
            }
          );
        }

      }
    );
    console.log(this.ligneCommande);
  }

  exist(){
    if (this.ligneCommande[0] == null){
      return true
    }
    return false;
  }

  facture(){
    window.print();
  }

  devis(a:[any],c:string){
    console.log("hedha a");
    console.log(a);
    let x=0;
    const doc = new jsPDF();
    let b= new Date(a[0].commande.date);
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
    for (let i:number=0; i<a.length; i++){
      total+=  a[i].quantite * a[i].produit.prix;
     // doc.setTextColor(0,0,0);
      doc.text(a[i].produit.nom.toString(),20,110*(i/5+1));
      doc.text(a[i].produit.prix.toString()+' DT',90,110*(i/5+1));
      doc.text(a[i].quantite.toString(),140,110*(i/5+1));
     // doc.text(b.toDateString(),130,30*(i+1));
      x=110*(i/5+1);
    }
    //doc.addImage("./assets/img/cla.jpg", 'JPG', 15, 40, 180, 160);

    doc.setFontSize(40);
    doc.text('Total',140,x+30);
    doc.setFontSize(20);
    doc.text(total.toString()+' DT',145,x+50);
    doc.setFontSize(50);
    if(c == 'facture'){
      doc.text('Facture',80,30);
      doc.save('facture '+a[0].commande.commandeId+'.pdf');
    } else{
      doc.text('Devis',80,30);
      doc.save('devis '+a[0].commande.userId.nom+'.pdf');
    }

  }

  annuler(a){
    // this.dialogRef.afterClosed().subscribe(
    // data =>{const dialogConfig= new MatDialogConfig();
    // // dialogConfig.disableClose = true;
    // // dialogConfig.autoFocus = true;
    // dialogConfig.width = "50%";
    // dialogConfig.maxHeight=window.innerHeight-50 + 'px';
    // this.dialog.open(ListCommandesComponent, dialogConfig);}
    // );
    this.factService.retrieveDevis(a).subscribe(
      data =>{
        console.log(data);
        this.factService.deleteDevis(data.devisId).subscribe();
      }
    );
    this.factService.retrieveFacture(a).subscribe(
      data =>{
        console.log(data);
        this.refrech();
        this.dialogRef.close();

        this.factService.deleteFacture(data.factId).subscribe();
      }
    );
    this.factService.deleteLigneCommande(a).subscribe(
      data =>{
        this.factService.deleteCommande(a).subscribe(
          data=>{

            const dialogConfig= new MatDialogConfig();
            // // dialogConfig.disableClose = true;
            // // dialogConfig.autoFocus = true;
            dialogConfig.width = "50%";
            dialogConfig.maxHeight=window.innerHeight-50 + 'px';
            this.dialog.open(ListCommandesComponent, dialogConfig);
          }
        );



      }
    );

  }

}
