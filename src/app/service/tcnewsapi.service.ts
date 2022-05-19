import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TcnewsapiService {
  general="https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=cbc6654ac8d14d4a916ed6e9f80f700d";
  business="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=cbc6654ac8d14d4a916ed6e9f80f700d";
  entertainment="https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=cbc6654ac8d14d4a916ed6e9f80f700d";
  health="https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=cbc6654ac8d14d4a916ed6e9f80f700d";
  science="https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=cbc6654ac8d14d4a916ed6e9f80f700d";
  sports="https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=cbc6654ac8d14d4a916ed6e9f80f700d";
  technology="https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=cbc6654ac8d14d4a916ed6e9f80f700d";
  constructor(private http:HttpClient) { }
  TcHeadLines():Observable<any>{
   return this.http.get(this.general);
  }
  Tcbusiness():Observable<any>{
   return this.http.get(this.business);
  }
  Tcentertainment():Observable<any>{
   return this.http.get(this.entertainment);
  }
  Tchealth():Observable<any>{
   return this.http.get(this.health);
  }
  Tcscience():Observable<any>{
   return this.http.get(this.science);
  }
  Tcsports():Observable<any>{
   return this.http.get(this.sports);
  }
  Tctechnology():Observable<any>{
   return this.http.get(this.technology);
  }

}
