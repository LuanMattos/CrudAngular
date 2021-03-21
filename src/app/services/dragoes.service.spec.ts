import {DragoesService} from './dragoes.service';
import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {Dragoes} from '../models/dragoes';
import {TokenService} from './token/token.service';
import {of} from 'rxjs';
import {SpinnerService} from '../shared/spinner/spinner.service';

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
        TokenService,
        SpinnerService
      ]
    });

    dragoesService = TestBed.inject(DragoesService);
  });

  it('Call getDragaoById', () => {
    const spy = spyOn(dragoesService, 'getDragaoById').and.returnValue(of(fakeDragoes));
    dragoesService.getDragaoById(1).subscribe(response => {
      expect(spy).toHaveBeenCalled();
      expect(response).toEqual(fakeDragoes);
    });
  });

});
