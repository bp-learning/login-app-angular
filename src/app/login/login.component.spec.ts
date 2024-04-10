import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';
import { LoginComponent } from './login.component';
import { AuthService } from '../services/AuthService';
import { TokenService } from '../services/TokenService';
import { FormsModule } from '@angular/forms';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  let mockAuthService = jasmine.createSpyObj(['login', 'register']);
  let mockTokenService = jasmine.createSpyObj(['get', 'store']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent, FormsModule],
      providers: [
        { provide: TokenService, useValue: mockTokenService },
        { provide: AuthService, useValue: mockAuthService },
      ],
    }).compileComponents();
  });

  beforeEach(fakeAsync(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    fixture.whenStable();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('can log in', () => {
    mockAuthService.login.and.returnValue(
      of({ email: 'jame@example.com', token: 'test' })
    );

    let usernameElement = fixture.debugElement.query(By.css('#username'));
    usernameElement.nativeElement.value = 'janedoe';
    usernameElement.nativeElement.dispatchEvent(new Event('input'));

    let passwordElement = fixture.debugElement.query(By.css('#password'));
    passwordElement.nativeElement.value = 'secret';
    passwordElement.nativeElement.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    fixture.debugElement
      .query(By.css('form'))
      .triggerEventHandler('submit', null);

    expect(mockAuthService.login).toHaveBeenCalledWith('janedoe', 'secret');
    expect(mockTokenService.store).toHaveBeenCalledOnceWith('test');
  });
});
