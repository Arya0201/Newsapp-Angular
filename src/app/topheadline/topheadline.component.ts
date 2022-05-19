import { Component, OnInit } from '@angular/core';
import { TcnewsapiService } from '../service/tcnewsapi.service';

@Component({
  selector: 'app-topheadline',
  templateUrl: './topheadline.component.html',
  styleUrls: ['./topheadline.component.css']
})
export class TopheadlineComponent implements OnInit {
  topheadlinedata:any=[];
  constructor(private api:TcnewsapiService) { }

  ngOnInit(): void {
    this.api.TcHeadLines().subscribe((result)=>{
      console.log(result);
      this.topheadlinedata=result.articles;
    })
  }

}
