import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  holidays: ClosedDay[];
  user:User;

  constructor(private closedDaysService: ClosedDaysService, private authService: AuthenticationService, private router:Router) {


   }

  ngOnInit(){

    this.user = this.authService.currentUserValue;


    this.getAllDatas();


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
      console.log(this.holidays.length);
    });



  }
  /**
   * Get AdminRole if the user is Admin
   * @returns true
   */

  isUserAdmin(): boolean {

    if(this.user.role.nomRole === 'Admin'){
      return true;
    }
    return false;
  }


   /**
   * Return to Closeddays page
   */
    returnHome(){
      this.router.navigateByUrl('closed-days');
    }

}




