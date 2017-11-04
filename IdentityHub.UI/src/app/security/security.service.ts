import { SecurityApiUri } from './security.constants';
import { Injectable,  Injector } from '@angular/core';


@Injectable()
export class SecurityService {
  private _apiUrl='http://localhost:3000';
  constructor(private _injector: Injector) {
    const temp = Injector.THROW_IF_NOT_FOUND;
    Injector.THROW_IF_NOT_FOUND = false;
    let test = this._injector.get(SecurityApiUri);
    if (test !== false){
      this._apiUrl = test;
    }
    Injector.THROW_IF_NOT_FOUND = temp;
  }

  public getAPiUrl= () => this._apiUrl;
}
