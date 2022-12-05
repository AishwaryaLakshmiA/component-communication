import { Injectable } from '@angular/core';
import { VendorModel } from './vendor-model';
import {Subject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class SharedSelectVendorService {

  constructor() { }
  vendorObs=new Subject<VendorModel>();
  vendor: VendorModel={} as VendorModel;
  setVendor(vendor: VendorModel)
  {
    this.vendor=vendor;
    this.vendorObs.next(vendor);
  }
  // getVendor()
  // {
  //   return this.vendor;
  // }
}
