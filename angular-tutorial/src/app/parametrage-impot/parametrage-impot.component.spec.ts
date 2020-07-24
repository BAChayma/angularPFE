import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametrageImpotComponent } from './parametrage-impot.component';

describe('ParametrageImpotComponent', () => {
  let component: ParametrageImpotComponent;
  let fixture: ComponentFixture<ParametrageImpotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParametrageImpotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametrageImpotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
