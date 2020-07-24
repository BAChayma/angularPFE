import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametrageNewColonneComponent } from './parametrage-new-colonne.component';

describe('ParametrageNewColonneComponent', () => {
  let component: ParametrageNewColonneComponent;
  let fixture: ComponentFixture<ParametrageNewColonneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParametrageNewColonneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametrageNewColonneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
