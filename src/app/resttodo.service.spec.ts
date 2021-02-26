import { TestBed } from '@angular/core/testing';

import { ResttodoService } from './resttodo.service';

describe('ResttodoService', () => {
  let service: ResttodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResttodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
