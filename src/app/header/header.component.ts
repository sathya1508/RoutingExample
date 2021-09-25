import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
@Input() Headername:string;
@Output() sendData:EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
   
  }

  buttonClick(val:any){
    //console.log("Event logged");
    this.sendData.emit(val);
  }
}
