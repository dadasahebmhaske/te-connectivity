import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubSectionMasterListComponent } from './sub-section-master-list.component';

describe('SubSectionMasterListComponent', () => {
  let component: SubSectionMasterListComponent;
  let fixture: ComponentFixture<SubSectionMasterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubSectionMasterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubSectionMasterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
