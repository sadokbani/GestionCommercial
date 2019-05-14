import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CommandeService} from "../list-commande/service/commande.service";
import {Comm, LigneCommande, Userr} from "../list-commande/list-commande.component";
import * as jsPDF from 'jspdf';
import {any} from "codelyzer/util/function";
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

  constructor(private commandeService: CommandeService) { }

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

  devis(){
    const doc = new jsPDF();

    //doc.addImage("./assets/img/cla.jpg", 'JPG', 15, 40, 180, 160);
    doc.text('hahaah',10,10);
    doc.save('devis.pdf');

  }

}
