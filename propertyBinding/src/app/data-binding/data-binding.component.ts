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
   * >> da aula de Input  nomeAleatorio: string = "five oh five"
   */

  
  constructor() { }

  mudarCor: boolean = false;
  valor: number;
  ngOnInit(): void {
  }

  meclick(){
    alert("Me clicou")
  }

  onkeyup(event : KeyboardEvent)  /**Tipando a variavel através do type*/
  {
    console.log((<HTMLInputElement>event.target).value); 
    /** Da um erro se usar "event.target.value". 
     * O event.target é do tipo HTML INPUT ELEMENT
     * Observe a sintaxe
    */ 
  }
  salvarValor(event)
  {
    console.log("Enter >> " + event);
    this.valor = event;
  }

  mouseover(){
  this.mudarCor = !this.mudarCor;
    ;
  }
}
