import { Component, OnInit , Output} from '@angular/core';
import { VendorModel } from 'src/app/vendor-model';
import { VendorsArrayService } from 'src/app/vendors-array.service';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.scss']
})
export class VendorComponent implements OnInit {

  selectedParent: VendorModel={} as VendorModel;
  vendorArray: VendorModel[]=this.vendorService.getVendorList();
  constructor(private vendorService: VendorsArrayService) { }
  gm:string=""
  ngOnInit(): void {
    //console.log("SEL: ", this.selected);
  }
  // selected(v: VendorModel)
  // {
  //   this.selectedParent=v;
  // }
  // getVendorArray() : VendorModel[]
  // {
  //   return this.vendorService.getVendorList();
  // }
  display()
  {
    console.log("SEL: ", this.selectedParent);
  }
}
