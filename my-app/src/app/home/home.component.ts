import { Component, Input, OnInit } from '@angular/core';
import textosjson from '../textos.json';  //Llegirá l'array de textos amb el format text i el (text: string;) dins del interface (sino fallará)
import {textosInterface } from '../textos.interface';  //interface textos (el "text: string" a referencia del array creat a textos.json llegirá les frases i les representará com a texte)

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() citesEpiquesHome: textosInterface[] = textosjson; //lectura de los textos.json

  iniciar(){
    this.pantallaPrincipal = !this.pantallaPrincipal;
  }

  pantallaPrincipal:boolean = (false);

  constructor() { }
  
  ngOnInit(): void {
  }

}
