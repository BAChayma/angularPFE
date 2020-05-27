import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormejuridiqueUpdateComponent } from './formejuridique-update.component';

describe('FormejuridiqueUpdateComponent', () => {
  let component: FormejuridiqueUpdateComponent;
  let fixture: ComponentFixture<FormejuridiqueUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormejuridiqueUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormejuridiqueUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
