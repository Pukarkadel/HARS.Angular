import { HotelService } from './../hotel.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-hotelform',
  templateUrl: './hotelform.component.html',
  styleUrls: ['./hotelform.component.scss']
})
export class HotelformComponent implements OnInit {

  formObject:any={
    hotelId: null,
    hotel:'',
    vatNumber:''
  }



  constructor(private dialogRef: MatDialogRef<HotelformComponent>,@Inject(MAT_DIALOG_DATA) public data:any,private hotelService:HotelService) { }

  ngOnInit() {
    this.formObject={...this.data};
  }
  onFormSubmit(){
    if (this.formObject.hotelId >0){
      this.hotelService.updateHotel(this.formObject).subscribe(response=>{
      this.formObject.hotelId=this.formObject.hotelId;
      this.dialogRef.close(this.formObject);
     })
    }
    else
    {
      this.hotelService.postHotel(this.formObject).subscribe( response => {
      this.formObject.hotelId=response;
      this.dialogRef.close(this.formObject);
      });
    }
  }

}
