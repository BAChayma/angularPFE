import { TestBed } from '@angular/core/testing';

import { SconnexionService } from './sconnexion.service';

describe('SconnexionService', () => {
  let service: SconnexionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SconnexionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
