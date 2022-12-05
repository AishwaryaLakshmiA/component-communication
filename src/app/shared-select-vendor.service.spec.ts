import { TestBed } from '@angular/core/testing';

import { SharedSelectVendorService } from './shared-select-vendor.service';

describe('SharedSelectVendorService', () => {
  let service: SharedSelectVendorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedSelectVendorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
