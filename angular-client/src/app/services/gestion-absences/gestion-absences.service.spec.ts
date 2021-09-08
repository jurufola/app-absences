import { TestBed } from '@angular/core/testing';

import { GestionAbsencesService } from './gestion-absences.service';

describe('GestionAbsencesService', () => {
  let service: GestionAbsencesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionAbsencesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
