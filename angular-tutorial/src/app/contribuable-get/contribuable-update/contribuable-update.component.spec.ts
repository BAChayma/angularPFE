import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContribuableUpdateComponent } from './contribuable-update.component';

describe('ContribuableUpdateComponent', () => {
  let component: ContribuableUpdateComponent;
  let fixture: ComponentFixture<ContribuableUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContribuableUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContribuableUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
