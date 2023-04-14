import { TestBed } from '@angular/core/testing';

import { ResponsibilitiesApiService } from './responsibilities-api.service';

describe('ResponsibilitiesApiService', () => {
  let service: ResponsibilitiesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResponsibilitiesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
