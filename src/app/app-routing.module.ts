import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CheckoutComponent} from "./pages/checkout/checkout.component";
import {AboutComponent} from "./pages/about/about.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";

const routes: Routes = [
  {path:'checkout',component: CheckoutComponent},
  {path:'',component: AboutComponent},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
