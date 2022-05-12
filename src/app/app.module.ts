import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ReactiveFormsModule } from "@angular/forms";
import { LoadingComponent } from './components/loading/loading.component';
import { AboutComponent } from './pages/about/about.component';
import { HeaderComponent } from './components/header/header.component';
import { CursorComponent } from './components/cursor/cursor.component';
import { HorizontalTextComponent } from './components/horizontal-text/horizontal-text.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckoutComponent,
    LoadingComponent,
    AboutComponent,
    HeaderComponent,
    CursorComponent,
    HorizontalTextComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
