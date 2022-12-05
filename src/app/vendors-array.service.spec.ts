import { TestBed } from '@angular/core/testing';

import { VendorsArrayService } from './vendors-array.service';

describe('VendorsArrayService', () => {
  let service: VendorsArrayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VendorsArrayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
