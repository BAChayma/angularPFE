import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclarationGetComponent } from './declaration-get.component';

describe('DeclarationGetComponent', () => {
  let component: DeclarationGetComponent;
  let fixture: ComponentFixture<DeclarationGetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeclarationGetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclarationGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
