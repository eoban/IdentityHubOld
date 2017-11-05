import { UserService } from './../user.service';
import { SecurityApiUri } from './../security.constants';
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
  @Input() callbackUrl = window.location.href;
  private landingUrl: SafeResourceUrl;
  private token: string;

  constructor(private _secSvc: SecurityService, private _userSvc: UserService, private _sanitizer: DomSanitizer) {}
  ngOnInit() {
    console.log(this.callbackUrl);
    this.landingUrl = this._sanitizer.bypassSecurityTrustResourceUrl(this._secSvc.getAPiUrl() +
      '/ui/login?callbackUrl=' + this.callbackUrl);
  }

  onNavigate(e: HTMLIFrameElement) {
    const url = e.contentWindow.location.href;
    this.token = new URL(url).searchParams.get('token');
    if (this.token){
        this._secSvc.finalizeLogin(this.token);
    }
  }
}
