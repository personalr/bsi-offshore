import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { Prosjekt } from "app/klasser/prosjekt.model";
import { Prosjekter } from "app/klasser/prosjekter";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {


 prosjekt: Prosjekt;



/*

Lage en ny prosjekt klasse. I den skal det være en iste med alle prosjekter. Siden settes opp
etter hvilket prosjektnummer (id) som velges

*/



  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (  params: Params)=>{
        //this.id=params.id;
      this.prosjekt=Prosjekter.getProsjektById (params.id);

      }
    
    );



  }
}
