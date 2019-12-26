import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private readonly apiUrl:string='http://localhost:5000/api/customer';

  constructor(private httpClient: HttpClient) { }

  getCustomerById(id,search): Observable<any>{
    const httpParams=new HttpParams().set('customerId',id);
    httpParams.append('Searchstring',search);
    const options ={params:httpParams}
    return this.httpClient.get(this.apiUrl+'/GetCustomer',options);
  }

  postCustomer(formObject:any):Observable<any>{
    const bodyObj=formObject;
    const httpHeaders=new HttpHeaders().set('Content-Type','application/json');
    const options ={headers:httpHeaders};
    return this.httpClient.post(this.apiUrl+ '/InsertCustomer',bodyObj,options);
  }

  deleteCustomer(customerId:any):Observable<any>{
    const httpParams=new HttpParams().set('customerId',customerId)
    const options ={params:httpParams};
    return this.httpClient.delete(this.apiUrl+ '/DeleteCustomer',options);
  }
  
  updateCustomer(formObject):Observable<any>{
    const bodyObj=formObject;
    const httpHeaders=new HttpHeaders().set('Content-Type','application/json');
    const options ={headers:httpHeaders};
    return this.httpClient.put(this.apiUrl+ '/UpdateCustomer',bodyObj,options);
  }

  searchCustomer(customerId,searchString):Observable<any>{

    const httpParams=new HttpParams().set('searchString',searchString)
    const options ={params:httpParams};
    return this.httpClient.get(this.apiUrl+ '/GetCustomer',options);

  }





}
