import { Injectable } from '@angular/core';
import { VendorModel } from './vendor-model';

@Injectable({
  providedIn: 'root'
})
export class VendorsArrayService {

  constructor() { }
  
  VendorList: VendorModel[] = [
    {name: "Aishwarya Lakshmi", age: 21, city:"Chennai"},
    {name: "Janani", age: 22, city:"Madhurai"},
    {name: "Jagadeesh", age: 23, city:"Bangalore"},
    {name: "Ram Krishna", age: 40, city:"Delhi"}
  ];

  getVendorList() : VendorModel[]
  {
    return this.VendorList;
  }

}
