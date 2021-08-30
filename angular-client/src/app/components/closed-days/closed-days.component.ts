import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ClosedDay } from 'src/app/models/closed-day';
import { ClosedDaysService } from 'src/app/services/closed-days/closed-days.service';

@Component({
  selector: 'app-closed-days',
  templateUrl: './closed-days.component.html',
  styleUrls: ['./closed-days.component.css']
})
export class ClosedDaysComponent implements OnInit {

holidays:ClosedDay = null;


  constructor(private closedDaysService: ClosedDaysService ) { }

  ngOnInit(){
    if(this.getAllDatas()){
      return  this.closedDaysService.getDatas();
    }
    
  }

  getAllDatas():boolean {

    this.closedDaysService.getDatas().subscribe((res:ClosedDay)=> {
      this.holidays = res;
    });
    if(this.holidays !=null){
      return true;
    }
    return false;
  }

  }







  

  

