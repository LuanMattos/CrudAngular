import {DragoesService} from './dragoes.service';
import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {Dragoes} from '../models/dragoes';
import {of} from 'rxjs';
import {TokenService} from './token/token.service';

describe('O serviço DragoesService', () => {

  let dragoesService: DragoesService;
  const fakeDragoes: Dragoes = {
    id: 1,
    name: '',
    type: '',
    createdAt: '',
    histories: ''
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        TokenService
      ]
    });

    dragoesService = TestBed.inject(DragoesService);
  });

  it('Instance', () => {
    expect(dragoesService).toBeTruthy();
  });

  it('Call getDragoes', () => {
    const spy = spyOn(dragoesService, 'getDragoes').and.returnValue(null);
    dragoesService.getDragoes().subscribe(response => {
      expect(spy).toHaveBeenCalled();
      expect(response);
    });
  });

});
