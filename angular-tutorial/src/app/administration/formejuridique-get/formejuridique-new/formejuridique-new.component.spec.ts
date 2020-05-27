import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormejuridiqueNewComponent } from './formejuridique-new.component';

describe('FormejuridiqueNewComponent', () => {
  let component: FormejuridiqueNewComponent;
  let fixture: ComponentFixture<FormejuridiqueNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormejuridiqueNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormejuridiqueNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
