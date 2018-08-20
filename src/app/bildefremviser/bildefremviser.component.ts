import { Component, OnInit, Input } from '@angular/core';
import { Prosjekt } from "app/klasser/prosjekt.model";

@Component({
  selector: 'app-bildefremviser',
  templateUrl: './bildefremviser.component.html',
  styleUrls: ['./bildefremviser.component.css']
})
export class BildefremviserComponent implements OnInit {
@Input() prosjekt: Prosjekt;

gjeldendeBilde;
tall;

  constructor() { }

  ngOnInit() {

   this.gjeldendeBilde=this.prosjekt.bilder[0];
   this.tall=0;
  }

prev(){
this.tall--;


if( this.tall<0){
  this.tall=this.prosjekt.bilder.length-1;
}



 this.gjeldendeBilde=this.prosjekt.bilder[this.tall];

}

next(){
this.tall++;

if( this.tall>this.prosjekt.bilder.length-1){
  this.tall=0;
}

this.gjeldendeBilde=this.prosjekt.bilder[this.tall];

}


}
