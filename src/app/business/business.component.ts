import { Component, OnInit } from '@angular/core';
import { TcnewsapiService } from '../service/tcnewsapi.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {
  topheadlinedata:any=[];
  constructor(private http:TcnewsapiService) { }

  ngOnInit(): void {
    this.http.Tcbusiness().subscribe((result)=>{
      console.log(result);
      this.topheadlinedata=result.articles;
    })
  }

}
