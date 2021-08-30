import { TestBed } from '@angular/core/testing';

import { ClosedDaysService } from './closed-days.service';

describe('ClosedDaysService', () => {
  let service: ClosedDaysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClosedDaysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
