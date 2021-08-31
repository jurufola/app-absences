import { Component, OnInit } from '@angular/core';
import { ClosedDay } from 'src/app/models/closed-day';
import { User } from 'src/app/models/user';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { ClosedDaysService } from 'src/app/services/closed-days/closed-days.service';

@Component({
  selector: 'app-closed-days',
  templateUrl: './closed-days.component.html',
  styleUrls: ['./closed-days.component.css']
})
export class ClosedDaysComponent implements OnInit {

  closedDays: ClosedDay;
  user:User;

  constructor(private closedDaysService: ClosedDaysService, private authAdminService: AuthenticationService) { }

  /**
   * 
   * @returns list of closedDays
   */
  ngOnInit() {
    console.log('ok');
    return this.closedDaysService.getClosedDays().subscribe((res:ClosedDay) => {
      this.closedDays = res;
    });
  }

  /**
   * 
   */
  addClosedDays(role:User){


  }

  getUserRoleAdmin(): boolean{
  
    return false;
  }
  

}
