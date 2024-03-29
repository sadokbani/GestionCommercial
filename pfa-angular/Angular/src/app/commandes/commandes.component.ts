import {Component, OnInit, ViewChild} from '@angular/core';
import {Comm, Userr} from "../starter/list-commande/list-commande.component";
import {MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {Prod} from "../produits/produit/produit.component";
import {CommandeService} from "../starter/list-commande/service/commande.service";
import {Router} from "@angular/router";
import {FactService} from "../starter/list-commandes/service/fact.service";


export class Commande{
  constructor(
    public commandeId?:number,
    public date?:Date,
    public etat?: number,
    public userId?: Userr,
    public détail?:string
  ) {}
}
@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.css']
})
export class CommandesComponent implements OnInit {
  displayedColumns: string[] = ['commandeId', 'date', 'etat', 'userId', 'détail', 'delete'];
  dataSource= new MatTableDataSource<Comm>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private commandeService: CommandeService,
              private router: Router,
              private factService:FactService) { }

  ngOnInit() {
    this.refreshCommande();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  refreshCommande(){
    this.commandeService.getAllCommande().subscribe(
      response => {
        this.dataSource.data = response as Comm[];}
    );
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  commandeDetail(id){
    this.router.navigate(['/admin/commande', id]);
  }

  suppCommande(a){
        this.factService.retrieveDevis(a).subscribe(
          data =>{
            this.factService.deleteDevis(data.devisId).subscribe();
          }
        );
        this.factService.retrieveFacture(a).subscribe(
          data =>{
            this.factService.deleteFacture(data.factId).subscribe();
          }
        );
        this.factService.deleteLigneCommande(a).subscribe(
          data =>{
            this.factService.deleteCommande(a).subscribe(
              data =>{ this.refreshCommande();}
            );
            }
        );







  }
}
