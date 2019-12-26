import { DeleteComponent } from './delete.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material';



@NgModule({
  declarations: [DeleteComponent],
  imports: [
    CommonModule,
    MatDialogModule
  ]
})
export class DeleteModule { }
