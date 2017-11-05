import { UserService } from './user.service';
import { SecurityApiUri } from './security.constants';
import { Injectable,  Injector } from '@angular/core';


@Injectable()
export class SecurityService {
  private _apiUrl='http://localhost:3000';
  constructor(private _injector: Injector, private _userSvc: UserService) {
    const temp = Injector.THROW_IF_NOT_FOUND;
    Injector.THROW_IF_NOT_FOUND = false;
    let test = this._injector.get(SecurityApiUri);
    if (test !== false){
      this._apiUrl = test;
    }
    Injector.THROW_IF_NOT_FOUND = temp;
  }

  public getAPiUrl= () => this._apiUrl;

  public finalizeLogin= (token: string) => {
    //post to validate, and set user based on result
    this._userSvc.setUser(token);
  }
  public login = (user: string, password: string) => {

  }
  public logout = () => {

  }

}
