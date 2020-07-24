import { TestBed } from '@angular/core/testing';

import { SDetLigneService } from './sdet-ligne.service';

describe('SDetLigneService', () => {
  let service: SDetLigneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SDetLigneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
