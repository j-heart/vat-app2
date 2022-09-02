import { TestBed } from '@angular/core/testing';

import { FinalDataService } from './final-data.service';

describe('FinalDataService', () => {
  let service: FinalDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinalDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
