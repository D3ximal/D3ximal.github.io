import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { HomeComponent } from './home';
import { ContactComponent } from './contact';
import { ReizenComponent } from './reizen';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    ReizenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
