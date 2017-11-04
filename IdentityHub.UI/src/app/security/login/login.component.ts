import { SecurityApiUri } from './../security.constants';

import { Router, Params } from '@angular/router';
import { SecurityService } from './../security.service';
import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'security-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() callbackUrl;
  private baseUrl: string;
  private landingUrl: SafeResourceUrl;
  private token= 'a';

  constructor(private _secSvc: SecurityService, private _sanitizer: DomSanitizer, private _router: Router) {
    this.callbackUrl = window.location.href;
  }
  ngOnInit() {
    this.baseUrl = this._secSvc.getAPiUrl();
    this.landingUrl = this._sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl + '/ui/login?callbackUrl=' + this.callbackUrl);
  }

  onNavigate(e: any) {
    const url2 = 'http://localhost' + this._router.url;
    const url = e.contentWindow.location.href;
    this.token = new URL(url2).searchParams.get('token');
    if (!this.token) {
      this.token = new URL(url).searchParams.get('token');
    }
    // here we want to retrieve the user using the token store it in local storage using the service, then navigate to the home page
  }
}
