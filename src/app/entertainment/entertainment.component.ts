import { Component, OnInit } from '@angular/core';
import { TcnewsapiService } from '../service/tcnewsapi.service';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent implements OnInit {

  topheadlinedata:any=[];
  constructor(private http:TcnewsapiService) { }

  ngOnInit(): void {
    this.http.Tcentertainment().subscribe((result)=>{
      console.log(result);
      this.topheadlinedata=result.articles;
    })
  }

}
