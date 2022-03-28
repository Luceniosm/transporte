import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginValidarSmsComponent } from './login-validar-sms.component';

describe('LoginValidarSmsComponent', () => {
  let component: LoginValidarSmsComponent;
  let fixture: ComponentFixture<LoginValidarSmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginValidarSmsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginValidarSmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
