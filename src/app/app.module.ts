import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { ReactiveFormsModule } from "@angular/forms";
import { LoadingComponent } from './components/loading/loading.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { CursorComponent } from './components/cursor/cursor.component';
import { HorizontalTextComponent } from './components/horizontal-text/horizontal-text.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { CursorService } from './service/active-cursor.service';
import { ProjectCard } from './components/project-card/project-card.component';
import { ProjectSectionComponent } from './components/project-section/project-section.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    LoadingComponent,
    HomeComponent,
    HeaderComponent,
    CursorComponent,
    HorizontalTextComponent,
    NotFoundComponent,
    HeroSectionComponent,
    ProjectCard,
    ProjectSectionComponent
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
