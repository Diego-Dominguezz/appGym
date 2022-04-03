import { TestBed } from '@angular/core/testing';

import { BicepService } from './bicep.service';

describe('BicepService', () => {
  let service: BicepService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BicepService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
