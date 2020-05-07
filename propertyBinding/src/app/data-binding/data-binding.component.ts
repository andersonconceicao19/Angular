import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  /**
   * Aula Property Binding
   * Se for passar a URL, é necessario usar o http
  url: string = 'https://www.google.com/webhp?hl=pt-BR&ictx=2&sa=X&ved=0ahUKEwjW_53xsaLpAhXkJLkGHVFLCPEQPQgH';
  urlImagem = 'http://lorempixel.com/400/200/sports/';
  */

  /** Aula Class e Style Binding
   * 
   */
  constructor() { }

  ngOnInit(): void {
  }

}
