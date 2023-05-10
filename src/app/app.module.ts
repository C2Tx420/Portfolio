import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ReactiveFormsModule } from "@angular/forms";
import { LoadingComponent } from './components/loading/loading.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { CursorComponent } from './components/cursor/cursor.component';
import { HorizontalTextComponent } from './components/horizontal-text/horizontal-text.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { CursorService } from './service/active-cursor.service';

@NgModule({
  declarations: [
    AppComponent,
    CheckoutComponent,
    LoadingComponent,
    HomeComponent,
    HeaderComponent,
    CursorComponent,
    HorizontalTextComponent,
    NotFoundComponent,
    HeroSectionComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [CursorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
