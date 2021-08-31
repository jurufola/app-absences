import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.css']
})
export class NavmenuComponent implements OnInit {

  currentUser: User;
  constructor(public authService: AuthenticationService) {
    this.authService.currentUser.subscribe(x => this.currentUser = x);
   }

  ngOnInit(): void {
  }

}
