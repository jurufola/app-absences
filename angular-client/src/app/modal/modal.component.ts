import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor() { }
 
  

  ngOnInit(): void {
  }

  showModal = -1;

  // tslint:disable-next-line: typedef
  show(index){
    this.showModal = index;
  }

  // tslint:disable-next-line: typedef
  close(){
    this.showModal = -1;
  }

}
