import { Component, OnInit } from '@angular/core';
import { TcnewsapiService } from '../service/tcnewsapi.service';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {
  topheadlinedata:any=[];
  constructor(private http:TcnewsapiService) { }

  ngOnInit(): void {
    this.http.Tchealth().subscribe((result)=>{
      console.log(result);
      this.topheadlinedata=result.articles;
    })
  }

}
