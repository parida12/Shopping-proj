import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule,Routes} from '@angular/router';
import{FormsModule} from '@angular/forms';



import { AppComponent } from './app.component';
import { TopnavComponent } from './topnav/topnav.component';
import { Array1Component } from './array1/array1.component';
import { FooterComponent } from './footer/footer.component';


//page routing block
const appRoot = [
 {path:'array-one',component:Array1Component },
 {path:'', redirectTo:'array-one', pathMatch:'full'}
               ];
//page routing end here


@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    Array1Component,
    FooterComponent,
  
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(appRoot)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
