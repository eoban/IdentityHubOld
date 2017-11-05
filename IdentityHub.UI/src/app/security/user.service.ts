import { Injectable } from '@angular/core';
import {ReplaySubject} from 'rxjs/ReplaySubject'

@Injectable()
export class UserService {
  public UserService: ReplaySubject<boolean> = new ReplaySubject<boolean>(1);
  constructor() {
      this.UserService.next(false);
   }
   setUser= (user: any) => {
     localStorage.setItem('user', user);
     this.UserService.next(user != null);
   }

   getUser= () =>
    localStorage.getItem('user')

   clearUser= () => this.setUser(null);
}
