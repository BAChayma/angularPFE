import { TestBed } from '@angular/core/testing';

import { SmenuService } from './smenu.service';

describe('SmenuService', () => {
  let service: SmenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SmenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
