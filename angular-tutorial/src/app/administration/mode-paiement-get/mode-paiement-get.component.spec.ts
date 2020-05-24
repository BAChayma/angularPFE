import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModePaiementGetComponent } from './mode-paiement-get.component';

describe('ModePaiementGetComponent', () => {
  let component: ModePaiementGetComponent;
  let fixture: ComponentFixture<ModePaiementGetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModePaiementGetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModePaiementGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
