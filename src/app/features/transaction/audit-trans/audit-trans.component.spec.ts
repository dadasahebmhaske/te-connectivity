import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditTransComponent } from './audit-trans.component';

describe('AuditTransComponent', () => {
  let component: AuditTransComponent;
  let fixture: ComponentFixture<AuditTransComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditTransComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditTransComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
