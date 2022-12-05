import { Component, OnInit, Input } from '@angular/core';
import { SharedSelectVendorService } from 'src/app/shared-select-vendor.service';
import { VendorModel } from 'src/app/vendor-model';

@Component({
  selector: 'app-active-vendor',
  templateUrl: './active-vendor.component.html',
  styleUrls: ['./active-vendor.component.scss']
})
export class ActiveVendorComponent implements OnInit {

  constructor(private sharedvendor: SharedSelectVendorService) { }
    // @Input() teacher? : TeacherModel;  
  @Input() vendorList: VendorModel[]=[];
  selectedVendor:VendorModel={} as VendorModel;


  ngOnInit(): void {
  }
  selectVendor(vendor: VendorModel)
  {
    //console.log("works");
    this.selectedVendor=vendor;
    console.log(this.selectedVendor);
    this.sharedvendor.setVendor(this.selectedVendor);
  }
}
