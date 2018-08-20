import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navelement',
  templateUrl: './navelement.component.html',
  styleUrls: ['./navelement.component.css'],


})
export class NavelementComponent implements OnInit {
  @Input() setup;
  

ngOnInit() {

}
}