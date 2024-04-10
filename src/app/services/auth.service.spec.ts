import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';

describe('AuthService', () => {
  let service: AuthService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, HttpClientModule],
    });
    service = TestBed.inject(AuthService);

    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('handles login', () => {
    let response = {
      email: 'jane@example.com',
      token: 'test',
    };

    service
      .login('janedoe', 'secret')
      .subscribe((res: any) => expect(res).toEqual(response));

    const request = httpTestingController.expectOne(
      (request) =>
        request.url.includes('/api/auth/login') && request.method === 'POST'
    );
    expect(request.request.method).toEqual('POST');
    request.flush(response);
    httpTestingController.verify();
  });

  it('handles registration', () => {
    let response = {
      email: 'jane@example.com',
      token: 'test',
    };

    service
      .register('janedoe', 'jane@example.com', 'secret')
      .subscribe((res: any) => expect(res).toEqual(response));

    const request = httpTestingController.expectOne(
      (request) =>
        request.url.includes('/api/auth/register') && request.method === 'POST'
    );
    request.flush(response);
    httpTestingController.verify();
  });
});
