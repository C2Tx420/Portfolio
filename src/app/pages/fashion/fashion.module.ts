import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FashionRoutingModule } from './fashion-routing.module';
import {FashionComponent} from "./fashion.component";
import {FashionHeaderComponent} from "../../components/fashion/fashion-header/fashion-header.component";
import { FashionInputComponent } from '../../components/fashion/fashion-input/fashion-input.component';
import { FashionCartComponent } from '../../components/fashion/fashion-cart/fashion-cart.component';
import { FashionWishlistComponent } from '../../components/fashion/fashion-wishlist/fashion-wishlist.component';
import { FashionUserComponent } from '../../components/fashion/fashion-user/fashion-user.component';
import { FashionHeroComponent } from '../../components/fashion/fashion-hero/fashion-hero.component';
import { FashionContentBlockComponent } from '../../components/fashion/fashion-content-block/fashion-content-block.component';
import { FashionButtonComponent } from '../../components/fashion/fashion-button/fashion-button.component';
import { FashionAdsComponent } from '../../components/fashion/fashion-ads/fashion-ads.component';
import { FashionAdsCardComponent } from '../../components/fashion/fashion-ads-card/fashion-ads-card.component';


@NgModule({
  declarations: [
    FashionComponent,
    FashionHeaderComponent,
    FashionInputComponent,
    FashionCartComponent,
    FashionWishlistComponent,
    FashionUserComponent,
    FashionHeroComponent,
    FashionContentBlockComponent,
    FashionButtonComponent,
    FashionAdsComponent,
    FashionAdsCardComponent
  ],
  imports: [
    CommonModule,
    FashionRoutingModule
  ]
})
export class FashionModule { }
