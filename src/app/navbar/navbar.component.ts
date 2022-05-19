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
   this.Onpass('general');
  }
  Onpass(data:any){
    this.http.getNews(data).subscribe((data:any)=>{
     this.topheadlinedata=data.articles; 
     this.passdata.emit(this.topheadlinedata); 
    })
  }
}
