import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaysGetComponent } from './pays-get.component';

describe('PaysGetComponent', () => {
  let component: PaysGetComponent;
  let fixture: ComponentFixture<PaysGetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaysGetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaysGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
