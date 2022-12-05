import { Component, OnInit } from '@angular/core';
import { VendorModel } from 'src/app/vendor-model';
import { VendorsArrayService } from 'src/app/vendors-array.service';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.scss']
})
export class VendorComponent implements OnInit {

  vendorArray: VendorModel[]=this.vendorService.getVendorList();
  constructor(private vendorService: VendorsArrayService) { }

  ngOnInit(): void {
  }
  // getVendorArray() : VendorModel[]
  // {
  //   return this.vendorService.getVendorList();
  // }
}
