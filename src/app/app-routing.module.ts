import { CustomerComponent } from './customer/customer.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HotelComponent } from './hotel/hotel.component';


const routes: Routes = [
  { path: 'hotel', component: HotelComponent },
  { path: '', redirectTo: 'hotel', pathMatch: 'full' },
  {path: 'customer', component:CustomerComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
