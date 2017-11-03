import { SecurityModule } from './../security/security.module';
import { ViewsRoutingModule } from './views-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    ViewsRoutingModule,
    SecurityModule
  ],
  declarations: [HomeComponent]
})
export class ViewsModule { }
