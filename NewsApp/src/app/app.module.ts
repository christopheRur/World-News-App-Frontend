import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AllNewsComponent } from './components/all-news/all-news.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    AllNewsComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule,
    RouterModule.forRoot([{path:'all-news',component: AllNewsComponent},
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
