import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {SpinnerService} from './spinner.service';


describe('O serviço DragoesService', () => {

  let spinnerService: SpinnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        SpinnerService
      ]
    });

    spinnerService = TestBed.inject(SpinnerService);
  });
});
