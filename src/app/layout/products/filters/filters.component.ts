import { Component, Input, OnInit } from '@angular/core';
import { Filter } from 'src/app/_models/filter.models';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
@Input() filter!:Filter;
  constructor() {

  }

  ngOnInit(): void {
  }

}
