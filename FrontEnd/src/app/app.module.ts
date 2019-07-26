import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './app-time-working/structure/header/header.component';
import { MenuComponent } from './app-time-working/structure/menu/menu.component';
import { HomeComponent } from './app-time-working/container/home/home.component';
import { FormsModule } from '@angular/forms';
import { TimeWorkingComponent } from './app-time-working/container/time-working/time-working.component';
import { TypeWorkComponent } from './app-time-working/container/type-work/type-work.component';
import { HttpClientModule } from '@angular/common/http';
import { ProjectsWorkComponent } from './app-time-working/container/projects-work/projects-work.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    HomeComponent,
    TimeWorkingComponent,
    TypeWorkComponent,
    ProjectsWorkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
