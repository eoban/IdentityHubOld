import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'security-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }
  onNavigate(e){
    if (e.baseURI){
      const token = new URL(e.contentWindow.location.href).searchParams.get('token');
      console.log(token);
      // here we want to retrieve the user using the token store it in local storage using the service, then navigate to the home page
      this._router.navigateByUrl('/home');
    }
  }
}
