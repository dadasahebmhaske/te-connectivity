import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MethodMasterListComponent } from './method-master-list.component';

describe('MethodMasterListComponent', () => {
  let component: MethodMasterListComponent;
  let fixture: ComponentFixture<MethodMasterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MethodMasterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MethodMasterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
