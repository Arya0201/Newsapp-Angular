import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule}  from '@angular/common/http';
import {TcnewsapiService} from './service/tcnewsapi.service';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingBarHttpClientModule
  ],
  providers: [TcnewsapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
