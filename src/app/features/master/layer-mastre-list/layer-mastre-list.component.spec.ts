import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayerMastreListComponent } from './layer-mastre-list.component';

describe('LayerMastreListComponent', () => {
  let component: LayerMastreListComponent;
  let fixture: ComponentFixture<LayerMastreListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayerMastreListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayerMastreListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
