import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CbUpdateComponent } from './cb-update.component';

describe('CbUpdateComponent', () => {
  let component: CbUpdateComponent;
  let fixture: ComponentFixture<CbUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CbUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CbUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
