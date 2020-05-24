import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiviteEseUpdateComponent } from './activite-ese-update.component';

describe('ActiviteEseUpdateComponent', () => {
  let component: ActiviteEseUpdateComponent;
  let fixture: ComponentFixture<ActiviteEseUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiviteEseUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiviteEseUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
