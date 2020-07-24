import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametrageNewComponent } from './parametrage-newLigne.component';

describe('ParametrageNewComponent', () => {
  let component: ParametrageNewComponent;
  let fixture: ComponentFixture<ParametrageNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParametrageNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametrageNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
