import {TestBed} from '@angular/core/testing';
import {DragoesResolver} from './dragoes.resolver';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {DragoesService} from '../services/dragoes.service';

describe('O resolver DragoesResolver', () => {

  let userResolver: DragoesResolver;
  let userService: DragoesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        DragoesService
      ],
      imports: [
        HttpClientTestingModule
      ]
    }).compileComponents();
  });

  beforeEach(async () => {
    userResolver = TestBed.inject(DragoesResolver);
    userService = TestBed.inject(DragoesService);
  });
});
