import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MethodMasterComponent } from './method-master.component';

describe('MethodMasterComponent', () => {
  let component: MethodMasterComponent;
  let fixture: ComponentFixture<MethodMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MethodMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MethodMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
