import { Component, OnInit } from '@angular/core';

import {MatTableDataSource} from '@angular/material/table';


import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';

import {LiveAnnouncer} from '@angular/cdk/a11y';
import {MatSort, Sort} from '@angular/material/sort';
import { FormControl, Validators } from '@angular/forms';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Boron', weight: 10.811, symbol: 'B2'},
  {position: 12, name: 'Carbon', weight: 12.0107, symbol: 'C2'},
  {position: 13, name: 'Nitrogen', weight: 14.0067, symbol: 'N2'},
  {position: 14, name: 'Oxygen', weight: 15.9994, symbol: 'O2'},
  {position: 15, name: 'Fluorine', weight: 18.9984, symbol: 'F2'},
  {position: 16, name: 'Neon', weight: 20.1797, symbol: 'Ne2'},
];


@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.page.html',
  styleUrls: ['./prueba.page.scss'],
})
export class PruebaPage implements OnInit {

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);


  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;

 async ngAfterViewInit() {
  console.log(this.dataSource)
    this.dataSource.paginator = this.paginator;
    // console.log(this.dataSource.paginator)
    // console.log(this.paginator)


    this.dataSource.sort = this.sort;
    console.log(this.dataSource.sort)
    console.log(this.sort)
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  constructor(private _liveAnnouncer: LiveAnnouncer) { }

  ngOnInit() {
  }

  announceSortChange(sortState: Sort) {
    console.log("mueve", sortState)
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

}
