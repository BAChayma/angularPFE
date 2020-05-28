import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdresseNewComponent } from './adresse-new.component';

describe('AdresseNewComponent', () => {
  let component: AdresseNewComponent;
  let fixture: ComponentFixture<AdresseNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdresseNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdresseNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
