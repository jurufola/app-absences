import { Component, OnInit } from '@angular/core';
import { ClosedDay } from 'src/app/models/closed-day';
import { ClosedDaysService } from 'src/app/services/closed-days/closed-days.service';

@Component({
  selector: 'app-closed-days',
  templateUrl: './closed-days.component.html',
  styleUrls: ['./closed-days.component.css']
})
export class ClosedDaysComponent implements OnInit {

  closedDays: ClosedDay = null;

  constructor(private closedDaysService: ClosedDaysService) { }

  ngOnInit(): void {

    this.closedDaysService.getClosedDays().subscribe((res:ClosedDay) => {
      this.closedDays = res;
    });
  }

}
