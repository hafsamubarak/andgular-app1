import { Component, Input, OnInit } from '@angular/core';
import { Filter } from 'src/app/_models/filter.models';

@Component({
  selector: 'app-filter-item',
  templateUrl: './filter-item.component.html',
  styleUrls: ['./filter-item.component.scss']
})
export class FilterItemComponent implements OnInit {
 @Input() filterListArray: Filter[];
  constructor() {
    this.filterListArray=[
      {name:"Arts & Crafts"},
      {name:"Automotive"},
      {name:"Baby"},
      {name:"Books"},
      {name:"Eletronics"},
      {name:"Women's Fashion"},
      {name:"Men's Fashion"},
      {name:"Health & Household"},
      {name:"Home & Kitchen"},
      {name:"Military Accessories"},
      {name:"Movies & Television"},
      {name:"Sports & Outdoors"},
      {name:"Tools & Home Improvement"},
      {name:"Toys & Games"}
    ]
  }

  ngOnInit(): void {
  }

}
