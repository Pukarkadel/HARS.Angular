import { MatButtonModule } from '@angular/material/button';
import { DeleteComponent } from './../delete/delete.component';
import { HotelformComponent } from './hotelform/hotelform.component';
import { HotelService } from './hotel.service';
import { HotelformModule } from './hotelform/hotelform.module';
import { HotelComponent } from './hotel.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [HotelComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    HotelformModule
  ],
   entryComponents:[
    HotelformComponent,
    DeleteComponent
  ],
  providers:[
    HotelService
  ]
})
export class HotelModule { }
