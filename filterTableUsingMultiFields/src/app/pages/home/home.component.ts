import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  nome: string;
  position: number;
  date: Date;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, nome: 'Hydrogen', date: new Date('2020-10-12')},
  {position: 2, nome: 'Helium', date: new Date('2020-11-19')},
  {position: 3, nome: 'Lithium', date: new Date('2020-10-12')},
  {position: 4, nome: 'boron', date: new Date('2020-10-11')},
  {position: 5, nome: 'Boron', date: new Date('2020-10-12')},
  {position: 6, nome: 'Carbon', date: new Date('2020-10-12')},
  {position: 7, nome: 'Nitrogen', date: new Date('2020-10-12')},
  {position: 8, nome: 'Oxygen', date: new Date('2020-10-12')},
  {position: 9, nome: 'Fluorine', date: new Date('2020-10-12')},
  {position: 10, nome: 'Neon', date: new Date('2020-10-12')},
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
    this.form = this.fb.group({
      position: [''],
      nome: [''],
      dateSee: ['']
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

      const columnPosition = row.position
      const columnDate = row.date
      const column = row.nome
      
      const filterPosition = columnPosition.toString().toLowerCase().includes(position); //
      const filterDate = columnDate.toDateString().toLowerCase().includes(dataSee); //
      const filterName = column.toLowerCase().includes(nome); //
      
      const matchFilter = []
      
      matchFilter.push(filterPosition)
      matchFilter.push(filterDate)
      matchFilter.push(filterName)
      return matchFilter.every(Boolean);
    }
  }

  onSee() {
    const date = this.form.controls['position'].value;
    const as = this.form.controls['nome'].value;
    const ds = this.form.controls['dateSee'].value;

    console.log(date);
    console.log(as);
    console.log(ds);
    

    let departureDate = (date === null || date === '') ? '' : date;
    let arrivalStation = as === null ? '' : as;
    let departureStation = ds === null ? '' : ds;

    // create string of our searching values and split if by '$'
    const filterValue = departureDate + '$' + departureStation + '$' + arrivalStation;

    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
