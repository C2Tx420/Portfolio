import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FashionRoutingModule } from './fashion-routing.module';
import {FashionComponent} from "./fashion.component";
import {FashionHeaderComponent} from "../../components/fashion/fashion-header/fashion-header.component";
import { FashionInputComponent } from '../../components/fashion/fashion-input/fashion-input.component';


@NgModule({
  declarations: [
    FashionComponent,
    FashionHeaderComponent,
    FashionInputComponent
  ],
  imports: [
    CommonModule,
    FashionRoutingModule
  ]
})
export class FashionModule { }
