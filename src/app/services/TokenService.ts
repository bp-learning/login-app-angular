import { Injectable } from '@angular/core';

const JWT_TOKEN_KEY = 'JWT_TOKEN_KEY';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor() {}

  public store(token: string): void {
    window.sessionStorage.removeItem(JWT_TOKEN_KEY);
    window.sessionStorage.setItem(JWT_TOKEN_KEY, token);
  }

  public get(): string | null {
    return window.sessionStorage.getItem(JWT_TOKEN_KEY);
  }
}
