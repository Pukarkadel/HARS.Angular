
import { CustomerService } from './../customer.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';


@Component({
  selector: 'app-customerform',
  templateUrl: './customerform.component.html',
  styleUrls: ['./customerform.component.scss']
})
export class CustomerformComponent implements OnInit {
  formObject:any={
    firstName:'',
    middleName:'',
    lastName:'',
    phoneNumber:'',
    customerAddress:'',
    citizenshipNumber:'',
    hotelId:0,
  }

  constructor(private dialogRef: MatDialogRef<CustomerformComponent>, @Inject(MAT_DIALOG_DATA) public data: any,private customerService: CustomerService ) { }

  ngOnInit() {
    this.formObject={...this.data};
  }

  onFormSubmit(){
    console.log(this.formObject.customerId);
    if (this.formObject.customerId >0){
      this.customerService.updateCustomer(this.formObject).subscribe(response=>{
      this.formObject.customerId=response;
      this.dialogRef.close(this.formObject);
     })
    }
    else
    {
      this.customerService.postCustomer(this.formObject).subscribe( response => {
        console.log(this.formObject.phone);
      this.formObject.customerId=response;
      this.dialogRef.close(this.formObject);
      });
    }
  }

}
