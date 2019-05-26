import { Component, OnInit } from '@angular/core';
import {ProduitService} from '../service/produit.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Fournisseur} from '../../fournisseurs/fournisseurs.component';
import {FournisseurService} from '../../fournisseurs/service/fournisseur.service';
import {FileService} from '../service/file/file.service';

export class Prod {
  constructor (
    public nom?: string,
    public categorie?: string,
    public description?: string,
    public prix?: number,
    public quantiteStock?: number,
    public image?: string,
    public fourId?: Fournisseur,
    public quantiteVendu?: number) {}
}


@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  prod= new Prod();
  four= new Fournisseur();
  aaaa: number;
  formData = new FormData();
  aaa: string;

  fours: Fournisseur[];
  id: number;
  hide = true;
  form: FormGroup = new FormGroup({
    $key: new FormControl(null), //id
    firstName: new FormControl('', Validators.required),
    //categorie : new FormControl('', Validators.required),
    prix : new FormControl('', Validators.required),
    quantiteStock : new FormControl('', Validators.required),
    description : new FormControl('', Validators.required),
    //fournisseur: new FormControl(0)

  });
  constructor(private produitService: ProduitService,
              private route: ActivatedRoute,
              private router: Router,
              private fournisseurService: FournisseurService,
              private fileService: FileService) { }


  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    if (this.id != -1 ) {
      this.produitService.retrieveProduit(this.id).subscribe(
        response => {
          console.log(response);
          this.prod = response;
        }
      ); }
     this.fournisseurService.retrieveAllFournisseurs().subscribe(
       response => {
         this.fours = response;
       }
     ) ;
  }

  onChange(event) {
    this.formData.append('file', event.target.files[0]);
    console.log(event.target.files[0].name);
    this.aaa = event.target.files[0].name;
  }

  ajouterProduit() {
   // this.four = new Fournisseur(this.aaaa);
   // this.prod = new Prod(this.prod.nom, this.prod.categorie,this.prod.description, this.prod.prix, this.prod.quantiteStock, this.aaa , this.four);
    //console.log(this.prod);
    this.prod.image= this.aaa;
    if (this.id == -1) {
      this.produitService.ajoutProduit(this.prod).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['/admin/produits']);
        },
        error => {
          console.log('aaaaaaa erreru');
        });

    } else {
      this.produitService.updateProduit(this.id, this.prod).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['/admin/produits']);
        }
      );
    }
    //console.log(this.formData);
    this.fileService.addImage(this.formData).subscribe(
      response => console.log(response),
      error =>{
        console.log("no image")
      }
    );
  }

}
