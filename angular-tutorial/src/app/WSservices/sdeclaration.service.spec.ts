import { TestBed } from '@angular/core/testing';

import { SdeclarationService } from './sdeclaration.service';

describe('SdeclarationService', () => {
  let service: SdeclarationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SdeclarationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
