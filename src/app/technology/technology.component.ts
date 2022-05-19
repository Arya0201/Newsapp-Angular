import { Component, OnInit } from '@angular/core';
import { TcnewsapiService } from '../service/tcnewsapi.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {
  topheadlinedata:any=[];
  constructor(private http:TcnewsapiService) { }

  ngOnInit(): void {
    this.http.Tctechnology().subscribe((result)=>{
      console.log(result);
      this.topheadlinedata=result.articles;
    })
  }
}
