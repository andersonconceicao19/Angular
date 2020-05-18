import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input("valorinicial") valor: number = 0; // Pegando valor do elemento pai

  @Output() valorAtualizado = new EventEmitter();
  /**
   * Usando o Output para passar parametro do elemento FILHO para o PAI.
   * utilizando o EventEmitter para ativar um evento que permite a action descrito acima.
   */
  
  constructor() { }

  ngOnInit(): void {
  }

  incrementa(){
    this.valor++;
    this.valorAtualizado.emit({
      novovalor: this.valor
    });
    /**
     *O valor é disparado para o elemento pai com um objeto.
     *O Objeto passado foi simples, mas pode ser passado algo complexo.
     */
  }
  decrementa(){
    this.valor--;
    this.valorAtualizado.emit({
      novovalor: this.valor
    });
  }
}
