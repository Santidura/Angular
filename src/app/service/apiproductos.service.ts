import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiproductosService {

  private urlproducts = 'https://fakestoreapi.com/products';

  constructor( private http : HttpClient ) { }

  public getproducts() : Observable<any> {
    return this.http.get(this.urlproducts);
  }

}
