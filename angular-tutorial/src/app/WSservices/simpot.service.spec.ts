import { TestBed } from '@angular/core/testing';

import { SimpotService } from './simpot.service';

describe('SimpotService', () => {
  let service: SimpotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimpotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
