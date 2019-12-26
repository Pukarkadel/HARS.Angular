import { DeleteComponent } from './../delete/delete.component';
import { HotelformComponent } from './hotelform/hotelform.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HotelService } from './hotel.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})
export class HotelComponent implements OnInit {
  selectedIndex:number;
  hotelData: any[];
  displayedColumns: string[] = ['hotelId', 'hotel', 'vatNumber'];
  
  constructor(private matDialog: MatDialog,private hotelService:HotelService) { }

  ngOnInit() {
this.getHotel();
  }
getHotel()
{
  this.hotelService.getHotelById().subscribe(response=>{
    this.hotelData=response;
    console.log(response);
  })
}
onRowClick(index)
  {
this.selectedIndex=index;
  }

  onAddClick(){
    const dialogRef=this.matDialog.open(HotelformComponent);
    dialogRef.afterClosed().subscribe(response => {
      if(response){
      const tempArray =[...this.hotelData];
      tempArray.unshift(response);
      this.hotelData=tempArray;
      }
      });
    
  }

  onEditClick(){
    if(this.selectedIndex !=null){
    const dialogRef=this.matDialog.open(HotelformComponent,{data:this.hotelData[this.selectedIndex]});
    dialogRef.afterClosed().subscribe(response => {
      if(response){
        //this.personData[this.selectedIndex]={...response};
        const tempArray=[...this.hotelData];
        tempArray[this.selectedIndex]={...response};
        this.hotelData=tempArray;
      };
    });
  }
  }

  onDeleteClick(){
    if(this.selectedIndex!=null){
    const dialogRef=this.matDialog.open(DeleteComponent);
    dialogRef.afterClosed().subscribe(response => {
    if(response==true){
    this.hotelService.deleteHotel(this.hotelData[this.selectedIndex].hotelId).subscribe(response =>{
      const tempArray=[...this.hotelData];
      tempArray.splice(this.selectedIndex,1);
      this.hotelData=tempArray;
      this.selectedIndex=null;
    })
    }
  });
  }
  }


}
