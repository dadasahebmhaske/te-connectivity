import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayerMastreComponent } from './layer-mastre.component';

describe('LayerMastreComponent', () => {
  let component: LayerMastreComponent;
  let fixture: ComponentFixture<LayerMastreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayerMastreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayerMastreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
