import { TestBed } from '@angular/core/testing';

import { GetListdoIdService } from './get-listdo-id.service';

describe('GetListdoIdService', () => {
  let service: GetListdoIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetListdoIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
