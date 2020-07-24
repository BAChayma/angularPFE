import { TestBed } from '@angular/core/testing';

import { ScelluleService } from './scellule.service';

describe('ScelluleService', () => {
  let service: ScelluleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScelluleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
