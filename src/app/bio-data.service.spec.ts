import { TestBed } from '@angular/core/testing';

import { BioDataService } from './bio-data.service';

describe('BioDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BioDataService = TestBed.get(BioDataService);
    expect(service).toBeTruthy();
  });
});
