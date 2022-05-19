import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FashionRoutingModule } from './fashion-routing.module';
import {FashionComponent} from "./fashion.component";
import {FashionHeaderComponent} from "../../components/fashion/fashion-header/fashion-header.component";
import { FashionInputComponent } from '../../components/fashion/fashion-input/fashion-input.component';
import { FashionCartComponent } from '../../components/fashion/fashion-cart/fashion-cart.component';
import { FashionWishlistComponent } from '../../components/fashion/fashion-wishlist/fashion-wishlist.component';
import { FashionUserComponent } from '../../components/fashion/fashion-user/fashion-user.component';


@NgModule({
  declarations: [
    FashionComponent,
    FashionHeaderComponent,
    FashionInputComponent,
    FashionCartComponent,
    FashionWishlistComponent,
    FashionUserComponent
  ],
  imports: [
    CommonModule,
    FashionRoutingModule
  ]
})
export class FashionModule { }
