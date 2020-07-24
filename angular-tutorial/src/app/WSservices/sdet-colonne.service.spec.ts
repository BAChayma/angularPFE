import { TestBed } from '@angular/core/testing';

import { SDetColonneService } from './sdet-colonne.service';

describe('SDetColonneService', () => {
  let service: SDetColonneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SDetColonneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
