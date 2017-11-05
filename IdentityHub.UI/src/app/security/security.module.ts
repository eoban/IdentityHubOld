import { UserService } from './user.service';
import { RouterModule } from '@angular/router';
import { SecurityApiUri } from './security.constants';
import { SecurityService } from './security.service';
import { NgModule,OpaqueToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';



@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    SecurityService,
    UserService
  ],
  declarations: [LoginComponent],
  exports: [LoginComponent]
})
export class SecurityModule { }
