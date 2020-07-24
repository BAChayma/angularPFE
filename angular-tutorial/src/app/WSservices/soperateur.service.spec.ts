import { TestBed } from '@angular/core/testing';

import { SoperateurService } from './soperateur.service';

describe('SoperateurService', () => {
  let service: SoperateurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SoperateurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
