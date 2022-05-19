import { Component, OnInit } from '@angular/core';
import { TcnewsapiService } from '../service/tcnewsapi.service';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent implements OnInit {

  topheadlinedata:any=[];
  constructor(private http:TcnewsapiService) { }

  ngOnInit(): void {
    this.http.Tcscience().subscribe((result)=>{
      console.log(result);
      this.topheadlinedata=result.articles;
    })
  }
}
