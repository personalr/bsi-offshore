import { Component, OnInit } from '@angular/core';
import { Prosjekter } from "app/klasser/prosjekter";
import { Prosjekt } from "app/klasser/prosjekt.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }



  ngOnInit() {


  }


prosjekter = Prosjekter.getProsjektene();

p1: Prosjekt=Prosjekter.getProsjekt(0);
p2: Prosjekt=Prosjekter.getProsjekt(1);
p3: Prosjekt=Prosjekter.getProsjekt(2);

p4: Prosjekt=Prosjekter.getProsjekt(3);
p5: Prosjekt=Prosjekter.getProsjekt(4);
p6: Prosjekt=Prosjekter.getProsjekt(5);

p7: Prosjekt=Prosjekter.getProsjekt(6);
p8: Prosjekt=Prosjekter.getProsjekt(7);
p9: Prosjekt=Prosjekter.getProsjekt(8);

}
