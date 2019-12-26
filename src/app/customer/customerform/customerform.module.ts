import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { CustomerformComponent } from './customerform.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule, MatSelectModule } from '@angular/material';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [CustomerformComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule
  ]
})
export class CustomerformModule { }
