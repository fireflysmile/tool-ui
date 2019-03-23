import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControlName, Validators, FormControl } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login: FormGroup;
  error: string;

  constructor(
    private fb: FormBuilder,
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.login = this.fb.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    // get email and password values
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

    this.dataService.get('user.json').subscribe(
      (data: any) => {

        const users = data.user;
        users.array.forEach(user => {
          if (payload.username === user.username && payload.password === user.password) {
            this.router.navigateByUrl('welcome');
          } else {

          }
        });

      }
    );
  }

}
