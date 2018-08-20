import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  smallNav=false;
  getBurgerEllerKryss(){
    if(this.smallNav){
    return  '&#10005';
    }else{
     return  '&#9776';

    }

    // &#215; or &times;
  }

  constructor() { }

  ngOnInit() {
  }
}