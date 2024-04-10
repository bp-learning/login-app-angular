import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/AuthService';
import { TokenService } from '../services/TokenService';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  form: any = {
    username: 'Test',
    password: '',
  };
  error: any;

  constructor(
    private tokenService: TokenService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    if (this.tokenService.get()) {
      // Logged in!
      console.log('Route to main page, Logged in');
    }
  }

  submit(): void {
    console.log('Submit');
    this.authService.login(this.form.username, this.form.password).subscribe(
      (response) => {
        this.tokenService.store(response.token);
        // Logged in!
        console.log('Got the new token. Logging in');
      },
      (error) => {
        this.error = error.message;
      }
    );
  }
}
