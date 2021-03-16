import {Injectable} from '@angular/core';

const API = 'example.com';

@Injectable()
export class SigninService{
  constructor() {}

  login( data ): boolean{
    return (data.user === 'admin' && data.password === 'admin');
  }
}
