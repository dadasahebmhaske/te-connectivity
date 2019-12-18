import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionMasterListComponent } from './section-master-list.component';

describe('SectionMasterListComponent', () => {
  let component: SectionMasterListComponent;
  let fixture: ComponentFixture<SectionMasterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionMasterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionMasterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
