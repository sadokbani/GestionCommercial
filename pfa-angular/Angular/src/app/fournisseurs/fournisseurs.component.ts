

import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {FournisseurService} from './service/fournisseur.service';
import {Router} from '@angular/router';
export class Fournisseur {
  constructor (
    public fourId?: number,
    public nom?: string,
    public mail?: string,
    public telephone?: string,
    public adresse?: string,
    public update?: string,
    public deletee?: string) {}
}


@Component({
  selector: 'app-fournisseurs',
  templateUrl: './fournisseurs.component.html',
  styleUrls: ['./fournisseurs.component.css']
})
export class FournisseursComponent implements OnInit {
  value= '';
  deletev = false;
  displayedColumns: string[] = ['idFour', 'nom', 'email', 'telephone', 'adresse', 'update', 'delete'];
  dataSource= new MatTableDataSource<Fournisseur>();


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;



  constructor(private fournisseurService: FournisseurService,
              private router: Router) { }
  ngOnInit() {
    this.refrechFournisseurs();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }

  refrechFournisseurs() {
    this.fournisseurService.retrieveAllFournisseurs().subscribe(
      response => {
        this.dataSource.data = response as Fournisseur[];

      }
    );
  }

  create() {
    this.router.navigate(['/admin/fournisseur', -1]);
  }

  updateFour(id) {
    this.router.navigate(['/admin/fournisseur', id]);
  }
  deleteFour(id) {
    this.fournisseurService.deleteFournisseur(id).subscribe(
      response => {
        this.deletev = false;
        this.refrechFournisseurs();
      },
      error => {
        this.deletev = true;
        //alert('ce fournisseur a encore de produit');
      }
    );
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}

