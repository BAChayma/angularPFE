import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormejuridiqueGetComponent } from './formejuridique-get.component';

describe('FormejuridiqueGetComponent', () => {
  let component: FormejuridiqueGetComponent;
  let fixture: ComponentFixture<FormejuridiqueGetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormejuridiqueGetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormejuridiqueGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
