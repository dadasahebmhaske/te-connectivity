import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantMasterListComponent } from './plant-master-list.component';

describe('PlantMasterListComponent', () => {
  let component: PlantMasterListComponent;
  let fixture: ComponentFixture<PlantMasterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantMasterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantMasterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
