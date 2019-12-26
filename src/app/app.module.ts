import { CustomerModule } from './customer/customer.module';
import { DeleteModule } from './delete/delete.module';
import { HotelModule } from './hotel/hotel.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DeleteComponent } from './delete/delete.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSidenavModule, MatToolbarModule, MatIconModule, MatSlideToggleModule } from '@angular/material';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HotelModule,
    MatSidenavModule,
    MatIconModule,
    MatSlideToggleModule,
    MatToolbarModule,
    HttpClientModule,
    AppRoutingModule,
    DeleteModule,
    CustomerModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
