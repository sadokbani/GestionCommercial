import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FournisseurService} from '../service/fournisseur.service';


export class Four {
  constructor (
    //public fourId?: number,
    public nom?: string,
    public mail?: string,
    public telephone?: string,
    public adresse?: string) {}
}
@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css']
})
export class FournisseurComponent implements OnInit {

  four= new Four();
  id: number;
  hide = true;
  form: FormGroup = new FormGroup({
    $key: new FormControl(null), //id
    firstName: new FormControl('', Validators.required),
    email : new FormControl('', [Validators.email, Validators.required]),
    mobile: new FormControl('', [Validators.required, Validators.minLength(8)]),
    city : new FormControl('', Validators.required),

  });
  constructor(private fourService: FournisseurService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    if (this.id != -1 ) {
      this.fourService.retrieveFournisseur(this.id).subscribe(
        response => {
          this.four = response;
        }
      ); }
  }


  ajouterFournisseur() {
    this.four = new Four(this.four.nom, this.four.mail, this.four.telephone, this.four.adresse);
    console.log('aaa');
    console.log(this.id);
    if (this.id == -1) {
      console.log('la');

      this.fourService.ajoutFournisseur(this.four).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['/admin/fournisseurs']);
        },
        error => {});
    } else {
      console.log('update work');
      this.fourService.updateFournisseur(this.id, this.four).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['/admin/fournisseurs']);
        }
      );
    }

  }

}
