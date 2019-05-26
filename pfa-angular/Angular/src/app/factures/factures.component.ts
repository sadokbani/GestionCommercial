import { Component, OnInit } from '@angular/core';
import {Facture} from "../starter/list-commandes/list-commandes.component";
import {FactService} from "../starter/list-commandes/service/fact.service";





/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-factures',
  templateUrl: './factures.component.html',
  styleUrls: ['./factures.component.css']
})
export class FacturesComponent implements OnInit {
  displayedColumns: string[] = ['factId', 'dateFact', 'total', 'commandeId'];
  dataSource :Facture[]=[];
  a:Facture[]=[];

  constructor(private factService: FactService) {}

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
}
