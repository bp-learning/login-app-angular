import { TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { TokenService } from './token.service';

describe('TokenService', () => {
  let service: TokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(TokenService);
  });

  it('stores the token', () => {
    service.store('test');
    expect(service.get()).toEqual('test');
  });
});
