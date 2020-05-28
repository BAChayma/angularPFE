import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CbNewComponent } from './cb-new.component';

describe('CbNewComponent', () => {
  let component: CbNewComponent;
  let fixture: ComponentFixture<CbNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CbNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CbNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
