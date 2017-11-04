import { SecurityApiUri } from './security/security.constants';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  exports:[],
  providers: [
      //  {provide: SecurityApiUri, useValue: 'http://localhost:3001'}
      ],
  bootstrap: [AppComponent]
})
export class AppModule { }
