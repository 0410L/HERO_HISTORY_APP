import { Component, Input, OnInit } from '@angular/core';
import {textosInterface } from '../textos.interface';

@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.css']
})
export class EscenaComponent implements OnInit {

  @Input() citesEpiques: textosInterface[]=[];

  currentSentence= 0;

  
  prev() {
    console.log(this.currentSentence)
    if (this.currentSentence >0){
      this.currentSentence--;
    }

    
  
  }
  next() {
    console.log(this.currentSentence)
    if (this.currentSentence < this.citesEpiques.length -1){
    this.currentSentence++;

    }
    
  }
  


/*
currentSentence: number = (0);
prev(): number {
  return this.currentSentence--;
}
next(): number {
  return this.currentSentence++;
}
*/

  /*prev(): number {
    if (this.currentSentence < 0)
  {this.currentSentence = 0}
  }

  next(): number {
    if (this.currentSentence < 0)
  {this.currentSentence = 0}
  }
  */

  constructor() { }

  ngOnInit(): void {
  }

}
