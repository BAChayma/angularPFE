import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametrageNewFormuleComponent } from './parametrage-new-formule.component';

describe('ParametrageNewFormuleComponent', () => {
  let component: ParametrageNewFormuleComponent;
  let fixture: ComponentFixture<ParametrageNewFormuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParametrageNewFormuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametrageNewFormuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
