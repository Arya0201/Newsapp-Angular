import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TcnewsapiService } from '../service/tcnewsapi.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    
  @Output() passdata :EventEmitter<any> = new EventEmitter();;
  topheadlinedata:any=[];
  constructor(private http:TcnewsapiService) {
     
   }

  ngOnInit(): void {
    this.http.TcHeadLines().subscribe(data=>{
      this.topheadlinedata=data.articles; 
      this.passdata.emit(this.topheadlinedata); 
     })
  }
  Ontech(){
    this.http.Tctechnology().subscribe(data=>{
     this.topheadlinedata=data.articles; 
     this.passdata.emit(this.topheadlinedata); 
    })
  }
  Onsport(){
    this.http.Tcsports().subscribe(data=>{
     this.topheadlinedata=data.articles; 
     this.passdata.emit(this.topheadlinedata); 
    })
  }
  Onscience(){
    this.http.Tcscience().subscribe(data=>{
      this.topheadlinedata=data.articles; 
      this.passdata.emit(this.topheadlinedata); 
     })
  }
  Onhealth(){
    this.http.Tchealth().subscribe(data=>{
      this.topheadlinedata=data.articles; 
      this.passdata.emit(this.topheadlinedata); 
     })
  }
  Onentertainment(){
    this.http.Tcentertainment().subscribe(data=>{
      this.topheadlinedata=data.articles; 
      this.passdata.emit(this.topheadlinedata); 
     })
  }
  onbusiness(){
    this.http.Tcbusiness().subscribe(data=>{
      this.topheadlinedata=data.articles; 
      this.passdata.emit(this.topheadlinedata); 
     })
  }
}
