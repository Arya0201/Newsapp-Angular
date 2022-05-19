import { Component ,OnInit} from '@angular/core';
import { TcnewsapiService } from './service/tcnewsapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
   constructor(private http:TcnewsapiService){
   }
   topheadlinedata:any=[];
   ngOnInit(){
   }
   pass(event:any){
     this.topheadlinedata=event;
   }
}
