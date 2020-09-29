import { TestBed } from '@angular/core/testing';

import { DragoesService } from './dragoes.service';

describe('DragoesService', () => {
  let service: DragoesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DragoesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
