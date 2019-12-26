import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  private readonly apiUrl:string='http://localhost:5000/api/hotel';

  constructor(private httpClient: HttpClient) { }

  getHotelById(): Observable<any>{
    const httpParams=new HttpParams().set('hotelId','0');
    const options ={params:httpParams}
    return this.httpClient.get(this.apiUrl+'/GetHotel',options);
  }

  postHotel(formObject:any):Observable<any>{
    const bodyObj=formObject;
    const httpHeaders=new HttpHeaders().set('Content-Type','application/json');
    const options ={headers:httpHeaders};
    return this.httpClient.post(this.apiUrl+ '/InsertHotel',bodyObj,options);
  }

  deleteHotel(hotelId:any):Observable<any>{
    const httpParams=new HttpParams().set('hotelId',hotelId)
    const options ={params:httpParams};
    return this.httpClient.delete(this.apiUrl+ '/DeleteHotel',options);
  }

  updateHotel(formObject):Observable<any>{
    const bodyObj=formObject;
    const httpHeaders=new HttpHeaders().set('Content-Type','application/json');
    const options ={headers:httpHeaders};
    return this.httpClient.put(this.apiUrl+ '/UpdateHotel',bodyObj,options);
  }
  

}
