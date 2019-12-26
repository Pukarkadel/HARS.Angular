import { CustomerService } from './customer.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from './../delete/delete.component';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CustomerformComponent } from './customerform/customerform.component';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit,OnDestroy {
  selectedRow:number;
  personData: any[];

  displayedColumns: string[] = ['firstname', 'middlename','lastname','phone', 'address','citizenshipNumber','hotelId'];
 searchString:string;
  constructor(private matDialog: MatDialog, private customerService:CustomerService) { }

  ngOnInit() {
    this.customerService.getCustomerById(0,{}).subscribe(response => {
      this.personData=response;
    })

   
  }

  onRowClick(index){
    //this.myCustomer=data.name;
    this.selectedRow=index;
    console.log(this.personData[this.selectedRow].customerId)
  }
  search:any;
  onSearchClick(){
  console.log(this.search);
  this.customerService.searchCustomer(0,this.search).subscribe(response=>{
    this.personData = response;
  })
}


  onAddClick(){
    const dialogRef=this.matDialog.open(CustomerformComponent);
    dialogRef.afterClosed().subscribe(response => {
      if(response){
      const tempArray =[...this.personData];
      tempArray.unshift(response);
      this.personData=tempArray;
      }
      })
      
  }

  onEditClick(){
    if(this.selectedRow !=null){
    const dialogRef=this.matDialog.open(CustomerformComponent,{data:this.personData[this.selectedRow]});
    dialogRef.afterClosed().subscribe(response => {
      if(response){
        //this.personData[this.selectedIndex]={...response};
        const tempArray=[...this.personData];
        tempArray[this.selectedRow]={...response};
        this.personData=tempArray;
      };
    });
  }
  }

  onDeleteClick(){
    if(this.selectedRow!=null){
    const dialogRef=this.matDialog.open(DeleteComponent);
    dialogRef.afterClosed().subscribe(response => {
    if(response==true){
    this.customerService.deleteCustomer(this.personData[this.selectedRow].customerId).subscribe(response =>{
      const tempArray=[...this.personData];
      tempArray.splice(this.selectedRow,1);
      this.personData=tempArray;
      this.selectedRow=null;
    })
    }
  });
  }
  }

  ngOnDestroy(): void {
  }


}
