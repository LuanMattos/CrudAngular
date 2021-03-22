import {TokenService} from './token.service';
import {TestBed} from '@angular/core/testing';

describe('O serviço TokenService', () => {

  let service: TokenService;
  const token = 'tokentest';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        TokenService
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    service = TestBed.inject(TokenService);
  });

  it('Instance', () => {
    expect(service).toBeTruthy();
  });

  it('Set token', () => {
    service.setToken(token);
    expect(service.hasToken()).toBeTruthy();
    expect(service.getToken()).toBe(token);
  });

  it('Clear the local storage', () => {
    service.setToken(token);
    service.removeToken();
    expect(service.hasToken()).toBeFalsy();
    expect(service.getToken()).toBeFalsy();
  });

  afterEach(() => {
    localStorage.clear();
  });
});
