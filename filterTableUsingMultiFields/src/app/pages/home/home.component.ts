import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  nome: string;
  position: number;
  date: Date;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, nome: 'Hydrogen', date: new Date('10-24-2020')},
  {position: 2, nome: 'Helium', date: new Date('10-11-2020')},
  {position: 3, nome: 'Lithium', date: new Date('10-11-2020')},
  {position: 4, nome: 'boron', date: new Date('10-11-2020')},
  {position: 5, nome: 'Boron', date: new Date('10-11-2020')},
  {position: 6, nome: 'Carbon', date: new Date('10-11-2020')},
  {position: 7, nome: 'Nitrogen', date: new Date('10-11-2020')},
  {position: 8, nome: 'Oxygen', date: new Date('10-11-2020')},
  {position: 9, nome: 'Fluorine', date: new Date('10-11-2020')},
  {position: 10, nome: 'Neon', date: new Date('10-11-2020')},
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  form: FormGroup;

  listFilter = ['position', 'nome', 'dateSee' ]
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.form = new FormGroup({
      position: new FormControl('' ),
      nome: new FormControl(''),
      dateSee: new FormControl('')
    });

    this.dataSource.filterPredicate = this.getPredicate();
  }
  displayedColumns: string[] = ['position', 'nome', 'date'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  getPredicate() {
    return (row: PeriodicElement, filters: string ) => {

      const filterRow = filters.split('$');
      const position = filterRow[0];
      const nome = filterRow[1];
      const dataSee = filterRow[2];
      
     
      let columnPosition = row.position
      let columnDate = row.date
      let column = row.nome

       // OBSERVAR OS TIPOS DE DADOS QUE ESTÃO SENDO COMPARADOS. SE COMPARAR UM DATE COM UM A STRING, VAI DA FALSE
      const filterPosition = columnPosition.toString().toLowerCase().includes(position); //
      const filterDate = columnDate.toString().toLowerCase().includes(dataSee); //
      const filterName = column.toLowerCase().includes(nome); //
      
      const matchFilter = []
      
      matchFilter.push(filterPosition)
      matchFilter.push(filterDate)
      matchFilter.push(filterName)
      return matchFilter.every(Boolean);
    }
  }
  public dateSee = '';
  public posicaoS = '';
  public nomes = ''

  onSee() {
    const pos = this.form.get('position').value;
    const nm = this.form.get('nome').value;
    const ds = this.form.get('dateSee').value;

    console.log(ds);
    

     this.dateSee = (ds === null || ds === '') ? '' : ds;
    this.nomes = nm === null ? '' : nm;
    this.posicaoS = pos === null ? '' : pos;

    // create string of our searching values and split if by '$'
    const filterValue = this.posicaoS + '$' + this.nomes + '$' + this.dateSee;

    console.log(filterValue);
    
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
