import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiviteEseNewComponent } from './activite-ese-new.component';

describe('ActiviteEseNewComponent', () => {
  let component: ActiviteEseNewComponent;
  let fixture: ComponentFixture<ActiviteEseNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiviteEseNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiviteEseNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
