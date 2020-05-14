import { TestBed } from '@angular/core/testing';

import { FootserviceService } from './footservice.service';

describe('FootserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FootserviceService = TestBed.get(FootserviceService);
    expect(service).toBeTruthy();
  });
});
