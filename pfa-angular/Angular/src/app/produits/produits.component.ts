import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Router} from '@angular/router';

import {ProduitService} from './service/produit.service';
import {Four} from '../fournisseurs/fournisseur/fournisseur.component';
import {Prod} from './produit/produit.component';
import {FileService} from './service/file/file.service';
export class Produit {
  constructor (
    public prodId: number,
    public nom: string,
    public categorie: string,
    public description: string,
    public prix: number,
    public quantiteStock: number,
    public image: string,
    public fourId: Four,
    public update: string,
    public deletee: string) {}
}
@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  value= '';
  deletev = false;
  displayedColumns: string[] = ['nom', 'categorie', 'description','image', 'prix', 'quantiteStock',  'fourId', 'update', 'delete'];
  dataSource= new MatTableDataSource<Prod>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;



  constructor(private produitService: ProduitService,
              private router: Router,
              private fileService: FileService) { }
  ngOnInit() {
    this.refrechProduits();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }

  refrechProduits() {
    this.produitService.retrieveAllProduits().subscribe(
      response => {
        this.dataSource.data = response as Prod[];

      }
    );
  }

  create() {
    this.router.navigate(['/admin/produit', -1]);
  }

  updateFour(id) {
    this.router.navigate(['/admin/produit', id]);
  }
  deleteFour(id) {
    this.produitService.deleteProduit(id).subscribe(
      response => {
        console.log(response);
        console.log('delete succ');
        this.deletev = false;
        this.refrechProduits();
      },
      error => {
        this.deletev = true;
        //alert('ce Produit a encore de produit');
      }
    );
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  // onSelectFile(event){
  //   console.log(event.target.files)
  // }


}
