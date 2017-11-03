import { SecurityService } from './security.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [SecurityService],
  declarations: [LoginComponent],
  exports:[LoginComponent]
})
export class SecurityModule { }
