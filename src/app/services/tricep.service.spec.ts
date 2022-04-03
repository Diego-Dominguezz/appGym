import { TestBed } from '@angular/core/testing';

import { TricepService } from './tricep.service';

describe('TricepService', () => {
  let service: TricepService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TricepService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
