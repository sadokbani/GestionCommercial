import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../users/service/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  pass= '';
  email= '' ;
  error = false;
  hide = true;
  form: FormGroup = new FormGroup({
    password: new FormControl('', Validators.required),
    email : new FormControl('', [Validators.email, Validators.required]),
  });
  constructor(private userService: UserService,
              private router: Router) { }
  ngOnInit() {
  }
  connexion() {
    this.userService.findUser(this.email, this.pass).subscribe(
      data => {
        console.log(data.grade);
        this.error = false;

        sessionStorage.setItem('User', JSON.stringify(data));
        if (data.grade == 0) {this.router.navigate(['/']);}
        if (data.grade == 1) {this.router.navigate(['/admin']);}

      },
      error => {
        this.error = true;
      }
    );
  }

}
