import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiviteEseGetComponent } from './activite-ese-get.component';

describe('ActiviteEseGetComponent', () => {
  let component: ActiviteEseGetComponent;
  let fixture: ComponentFixture<ActiviteEseGetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiviteEseGetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiviteEseGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
