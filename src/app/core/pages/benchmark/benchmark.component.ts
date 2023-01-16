import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import {MatAutocompleteSelectedEvent, MatAutocomplete} from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import {FormControl} from '@angular/forms';

import { ProgressbarConfig } from 'ngx-bootstrap/progressbar';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';

import {COMMA, ENTER} from '@angular/cdk/keycodes';

import { AccordionConfig } from 'ngx-bootstrap/accordion';

import {Observable} from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { pieData, achieved, single } from '../../../../assets/data/data';


// @Component({
//   selector: 'app-benchmark-component',
//   templateUrl: './benchmark.component.html',
//   styleUrls: ['./benchmark.component.scss'],
//   providers: [
//     { provide: AccordionConfig, useFactory: getAccordionConfig },
//     // GOAL TRACKER
//     { provide: ProgressbarConfig, useFactory: getProgressbarConfig },
//     { provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }]
// })

export class BenchmarkComponent implements OnInit {

  // CHART
  //
  pieData: any[];
  view: any[] = [400, 500];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#BFD7EA', '#EEE0CB', '#4A1942', '#AAAAAA', '#AA767C']
  };
  // END CHART

  // ACHIEVEMENT
  achieved: any[];
  viewGauge: any[] = [369, 369];
  legend: boolean = false;
  legendPosition: string = 'below';

  graphClass = 'graphClass';


  /*
   CHIP START HERE
  */
  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  fruitCtrl = new FormControl();
  filteredFruits: Observable<string[]>;
  fruits: string[] = ['Groceries', 'Petrol'];
  allFruits: string[] = ['Internet', 'Netflix', 'Spotify', 'Petrol', 'Groceries'];

  @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.fruits.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.fruitCtrl.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.fruits.push(event.option.viewValue);
    this.fruitInput.nativeElement.value = '';
    this.fruitCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allFruits.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
  }
  /*
   CHIP END HERE
  */
   single: any[];

   colorGrid = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };



  /*
   GOAL SELECTOR
  */
  text: string;
  onOpenChange(data: boolean): void {
    this.text = data ? 'opened' : 'closed';
  }







  constructor() {
    this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
      startWith(null), map((fruit: string | null) => fruit ? this._filter(fruit) : this.allFruits.slice()));

    // CHART
    Object.assign(this, { pieData });

    // Achievement
    Object.assign(this, { achieved });

    Object.assign(this, { single });
  }

  ngOnInit(): void {
  }
}

export function getAccordionConfig(): AccordionConfig {
  return Object.assign(new AccordionConfig(), { closeOthers: true });
}



// CHIP
export interface Fruit {
  name: string;
}



/*
  GOAL TRACKER START
*/

  export function getProgressbarConfig(): ProgressbarConfig {
    return Object.assign(new ProgressbarConfig(), { animate: true, striped: true,  max: 150 });
  }