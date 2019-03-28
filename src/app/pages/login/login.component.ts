import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { message } from 'src/app/core/messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // init datas
  login: FormGroup;
  error: string;

  constructor(
    private fb: FormBuilder,
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit() {
    // build login form
    this.login = this.fb.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  // submit login
  onSubmit() {
    // get username and password values
    const username: string = this.login.get('username').value;
    const password: string = this.login.get('password').value;

    // trim values
    username.trim();
    password.trim();

    // set payload
    const payload = {
      username,
      password
    };

    // check data login
    this.dataService.get('user.json').subscribe(
      (data: any) => {
        const users = data.user;
        users.forEach((user: any) => {
          if (payload.username === user.username && payload.password === user.password) {
            this.router.navigateByUrl('welcome');
          } else {
            this.error = message.error_login;
          }
        });
      }
    );
  }

}
