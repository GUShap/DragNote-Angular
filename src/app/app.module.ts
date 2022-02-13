import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainViewComponent } from './pages/main-view/main-view.component';

import {DragDropModule } from '@angular/cdk/drag-drop';
import { ChangeTextDirective } from './directives/change-text.directive';

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    ChangeTextDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
