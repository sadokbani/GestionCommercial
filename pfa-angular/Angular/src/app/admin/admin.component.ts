import { Component, OnInit } from '@angular/core';
import {ProduitService} from "../produits/service/produit.service";


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {


   pieChartLabels = ['PC', 'Accessoire', 'Telephone'];
   pieChartData = [11,2,3];
   pieChartType = 'pie';



  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels = [];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData = [
    {data: [], label: 'Quantite Stock'},
    {data: [], label: 'Quantite Vendu'}
  ];

  public barChartLabels1 = [];
  public barChartData1 = [
    {data: [], label: 'Quantite Stock'},
    {data: [], label: 'Quantite Vendu'}
  ];
  public barChartLabels2 = [];
  public barChartData2 = [
    {data: [], label: 'Quantite Stock'},
    {data: [], label: 'Quantite Vendu'}
  ];
  constructor(private produitService :ProduitService) { }

  ngOnInit() {
    this.produitService.retrieveAllProduits().subscribe(
     data =>{
       let acc=0;
       let pc=0;
       let tlf=0;
       // this.barChartLabels=[];
       // this.barChartData[0].data=[];
       // this.barChartData[1].data=[];
       for (let i = 0; i <data.length ; i++) {

         if(data[i].categorie.toLowerCase() =='pc'){
           pc+= data[i].quantiteVendu;
           this.barChartLabels.push(data[i].nom);
           this.barChartData[0].data.push(data[i].quantiteStock);
           this.barChartData[1].data.push(data[i].quantiteVendu);
         }
         if(data[i].categorie.toLowerCase() =='telephone'){
           tlf+= data[i].quantiteVendu;
           this.barChartLabels1.push(data[i].nom);
           this.barChartData1[0].data.push(data[i].quantiteStock);
           this.barChartData1[1].data.push(data[i].quantiteVendu);
         }
         if(data[i].categorie.toLowerCase() =='accessoire'){
           acc+= data[i].quantiteVendu;
           this.barChartLabels2.push(data[i].nom);
           this.barChartData2[0].data.push(data[i].quantiteStock);
           this.barChartData2[1].data.push(data[i].quantiteVendu);
         }

       }
       this.pieChartData=[pc,acc,tlf];

    }
    )
  }

}
