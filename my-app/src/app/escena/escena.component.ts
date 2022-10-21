import { Component, Input, OnInit } from '@angular/core';
import {textosInterface } from '../textos.interface';

@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.css']
})
export class EscenaComponent implements OnInit {

  @Input() citesEpiques: textosInterface[]=[];

  currentSentence: number = (0);
  prev(): number {
    return this.currentSentence--;
  }
  next(): number {
    return this.currentSentence++;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
