import { Component, OnInit } from '@angular/core';
import {NavItemModel} from "./models/nav-item-model";

@Component({
  selector: 'app-fashion-header',
  templateUrl: './fashion-header.component.html',
  styleUrls: ['./fashion-header.component.scss']
})
export class FashionHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  navList: NavItemModel[] = [{label:'Men'},
                      {label: 'Women'},
                      {label: 'Kids'},
                      {label: 'Winter', isNew: true},
                      {label: 'Lifestyle'}];

}
