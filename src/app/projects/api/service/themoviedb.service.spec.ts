import { TestBed } from '@angular/core/testing';

import { ThemoviedbService } from './themoviedb.service';

describe('ThemoviedbService', () => {
  let service: ThemoviedbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemoviedbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
