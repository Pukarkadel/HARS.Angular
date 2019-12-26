import { MatFormFieldModule } from '@angular/material/form-field';
import { DeleteComponent } from './../delete/delete.component';
import { CustomerformComponent } from './customerform/customerform.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material';
import { CustomerService } from './customer.service';
import { CustomerformModule } from './customerform/customerform.module';
import { CustomerComponent } from './customer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';





@NgModule({
  declarations: [CustomerComponent],
  imports: [
    CommonModule,
    CustomerformModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    MatTableModule
  ],
  entryComponents:[
  CustomerformComponent,
  DeleteComponent
  ],
  providers:[CustomerService]
})
export class CustomerModule { }
