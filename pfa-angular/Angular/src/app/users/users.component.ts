import { Component, OnInit } from '@angular/core';
import {UserService} from './service/user.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
export class User {
  constructor(
    public nom: string,
    public prenom: string,
    public telephone: string,
    public pays: string,
    public adresse: string,
    public password: string,
    public grade?: number
  ) {}
}
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  pass = '';
  passV = '';
  user: User;
  nom = '';
  prenom = '';
  pays = '';
  telephone = '';
  email = '';
  emailv= false;
  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit() {
  }



  hide = true;
  form: FormGroup = new FormGroup({
    $key: new FormControl(null), //id
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    passwordV: new FormControl('', Validators.required),
    email : new FormControl('', [Validators.email, Validators.required]),
    mobile: new FormControl('', [Validators.required, Validators.minLength(8)]),
    city : new FormControl('', Validators.required),

  });

  ajouterUser() {
    this.user = new User(this.nom, this.prenom, this.telephone, this.pays , this.email, this.pass);
    this.userService.ajoutUser(this.user).subscribe(
      data => {
        console.log(data);
        this.emailv = false;
        this.router.navigate(['/']);
      },
      error => {
        this.emailv = true;
      }
    );

  }

}
