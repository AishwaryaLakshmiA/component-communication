import { Component, OnInit } from '@angular/core';
import { SharedSelectVendorService } from 'src/app/shared-select-vendor.service';
import { VendorModel } from 'src/app/vendor-model';

@Component({
  selector: 'app-block-vendor',
  templateUrl: './block-vendor.component.html',
  styleUrls: ['./block-vendor.component.scss']
})
export class BlockVendorComponent implements OnInit {

  selectedVendor?: VendorModel;
  // vendorValue!: VendorModel={} as VendorModel;
  vendorValue?: VendorModel;
  
  constructor(private sharedservice: SharedSelectVendorService) { }
  ngOnInit(): void {
      this.sharedservice.vendorObs.subscribe((data) => {
      this.vendorValue=data;
      console.log("data: ", this.vendorValue);
    })
  }
  display()
  {
    // console.log(this.sharedservice.getVendor());
    // this.selectedVendor=this.sharedservice.getVendor();
    console.log(this.selectedVendor);
  }
}
