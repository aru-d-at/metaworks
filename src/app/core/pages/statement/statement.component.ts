import { Component, OnInit, ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.scss']
})
export class StatementComponent implements OnInit {
  // CALENDAR
  today: Date;
  /*
  FILTER AND TABLE
  */
  displayedColumns: string[] = ['position', 'name', 'amount', 'date'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  /*
    FILTER AND TABLE END
  */

  constructor() {
    
  }

  ngOnInit(): void {
    this.today = new Date();
    this.dataSource.paginator = this.paginator;
  }

}

export interface PeriodicElement {
  name: string;
  position: number;
  amount: number;
  date: string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Food', amount: 30, date: '10-10-2022'},
  {position: 2, name: 'Rent', amount: 330, date: '09-10-2022'},
  {position: 3, name: 'Petrol', amount: 20, date: '08-10-2022'},
  {position: 4, name: 'Netflix', amount: 30, date: '07-10-2022'},
  {position: 5, name: 'Food', amount: 10.811, date: '05-10-2022'},
  {position: 6, name: 'Groceries', amount: 12.0107, date: '02-10-2022'},
  {position: 7, name: 'Internet', amount: 130, date: '19-09-2022'},
  {position: 8, name: 'Petrol', amount: 15.9994, date: '17-09-2022'},
  {position: 9, name: 'Fluorine', amount: 18.9984, date: '16-09-2022'},
  {position: 10, name: 'Groceries', amount: 20.1797, date: '15-10-2022'},
  {position: 11, name: 'Sodium', amount: 22.9897, date: '10-10-2022'},
  {position: 12, name: 'Petrol', amount: 24.305, date: '10-10-2022'},
  {position: 13, name: 'Petrol', amount: 26.9815, date: '10-10-2022'},
  {position: 14, name: 'Petrol', amount: 28.0855, date: '10-10-2022'},
  {position: 15, name: 'Petrol', amount: 30.9738, date: '10-10-2022'},
  {position: 16, name: 'Petrol', amount: 32.065, date: '10-10-2022'},
  {position: 17, name: 'Petrol', amount: 35.453, date: '10-10-2022'},
  {position: 18, name: 'Petrol', amount: 39.948, date: '10-10-2022'},
  {position: 19, name: 'Petrol', amount: 39.0983, date: '10-10-2022'},
  {position: 20, name: 'Petrol', amount: 40.078, date: '10-10-2022'},
];