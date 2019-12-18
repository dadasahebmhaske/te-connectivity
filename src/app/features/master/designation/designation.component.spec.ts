import { async, ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<< HEAD:src/app/features/auth/forgot-password/forgot-password.component.spec.ts
import { ForgotPasswordComponent } from './forgot-password.component';

describe('ForgotPasswordComponent', () => {
  let component: ForgotPasswordComponent;
  let fixture: ComponentFixture<ForgotPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgotPasswordComponent ]
=======
import { DesignationComponent } from './designation.component';

describe('DesignationComponent', () => {
  let component: DesignationComponent;
  let fixture: ComponentFixture<DesignationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignationComponent ]
>>>>>>> 1803a142b041fe2a68905b89872dd0b5ef635ed9:src/app/features/master/designation/designation.component.spec.ts
    })
    .compileComponents();
  }));

  beforeEach(() => {
<<<<<<< HEAD:src/app/features/auth/forgot-password/forgot-password.component.spec.ts
    fixture = TestBed.createComponent(ForgotPasswordComponent);
=======
    fixture = TestBed.createComponent(DesignationComponent);
>>>>>>> 1803a142b041fe2a68905b89872dd0b5ef635ed9:src/app/features/master/designation/designation.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
