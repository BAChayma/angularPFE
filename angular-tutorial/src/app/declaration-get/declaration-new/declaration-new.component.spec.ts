import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclarationNewComponent } from './declaration-new.component';

describe('DeclarationNewComponent', () => {
  let component: DeclarationNewComponent;
  let fixture: ComponentFixture<DeclarationNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeclarationNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclarationNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
