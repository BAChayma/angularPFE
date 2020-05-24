import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpotGetComponent } from './impot-get.component';

describe('ImpotGetComponent', () => {
  let component: ImpotGetComponent;
  let fixture: ComponentFixture<ImpotGetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImpotGetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpotGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
