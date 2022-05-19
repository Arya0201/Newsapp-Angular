import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TcnewsapiService {
 
  url="https://newsapi.org/v2/top-headlines?country=in&category=";
  last="&apiKey=cbc6654ac8d14d4a916ed6e9f80f700d";
  constructor(private http:HttpClient) { 
  }
  topheadlinedata:any=[];
  getNews(category:string):Observable<any>{
    let link=this.url+category+this.last;
   return this.http.get(link);
  }
  
}
