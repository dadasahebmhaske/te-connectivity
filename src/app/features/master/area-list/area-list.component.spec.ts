import { async, ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<< HEAD:src/app/features/configuration/user-list/user-list.component.spec.ts
import { UserListComponent } from './user-list.component';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserListComponent ]
=======
import { AreaListComponent } from './area-list.component';

describe('AreaListComponent', () => {
  let component: AreaListComponent;
  let fixture: ComponentFixture<AreaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaListComponent ]
>>>>>>> 1803a142b041fe2a68905b89872dd0b5ef635ed9:src/app/features/master/area-list/area-list.component.spec.ts
    })
    .compileComponents();
  }));

  beforeEach(() => {
<<<<<<< HEAD:src/app/features/configuration/user-list/user-list.component.spec.ts
    fixture = TestBed.createComponent(UserListComponent);
=======
    fixture = TestBed.createComponent(AreaListComponent);
>>>>>>> 1803a142b041fe2a68905b89872dd0b5ef635ed9:src/app/features/master/area-list/area-list.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
