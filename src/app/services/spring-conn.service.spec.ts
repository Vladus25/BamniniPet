import { TestBed } from '@angular/core/testing';

import { SpringConnService } from './spring-conn.service';

describe('SpringConnService', () => {
  let service: SpringConnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpringConnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
