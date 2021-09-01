import { Component, OnInit } from '@angular/core';
import { ClosedDay } from 'src/app/models/closed-day';
import { User } from 'src/app/models/user';
import { ClosedDaysService } from 'src/app/services/closed-days/closed-days.service';

@Component({
  selector: 'app-closed-days',
  templateUrl: './closed-days.component.html',
  styleUrls: ['./closed-days.component.css']
})
export class ClosedDaysComponent implements OnInit {

  holidays: ClosedDay[];
  user:User;




  constructor(private closedDaysService: ClosedDaysService) { }

  ngOnInit(){
  
      return this.getAllDatas();
    
    
  }
/**
 * to view the all holidays 
 * @returns holidays
 */
  getAllDatas(){

    this.closedDaysService.getDatas().subscribe((res:ClosedDay[])=> {
      this.holidays = res;
      res.forEach(element => {
        console.log(element);
      });
    });
    
   
  
  }
/**
 * to view crud action if the user is admin
 * @returns actions
 */
  getAdminAction(): boolean{
     this.closedDaysService.getUserRole(this.user).subscribe((res:User)=> {
       this.user = res;
    });
    if((this.user.role.nomRole === 'admin')){
        return true;
    }

    return false
  
  }

}




