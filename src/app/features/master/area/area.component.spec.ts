import { async, ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<< HEAD:src/app/features/configuration/user/user.component.spec.ts
import { UserComponent } from './user.component';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserComponent ]
=======
import { AreaComponent } from './area.component';

describe('AreaComponent', () => {
  let component: AreaComponent;
  let fixture: ComponentFixture<AreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaComponent ]
>>>>>>> 1803a142b041fe2a68905b89872dd0b5ef635ed9:src/app/features/master/area/area.component.spec.ts
    })
    .compileComponents();
  }));

  beforeEach(() => {
<<<<<<< HEAD:src/app/features/configuration/user/user.component.spec.ts
    fixture = TestBed.createComponent(UserComponent);
=======
    fixture = TestBed.createComponent(AreaComponent);
>>>>>>> 1803a142b041fe2a68905b89872dd0b5ef635ed9:src/app/features/master/area/area.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
