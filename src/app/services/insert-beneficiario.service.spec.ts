import { TestBed } from '@angular/core/testing';

import { InsertBeneficiarioService } from './insert-beneficiario.service';

describe('InsertBeneficiarioService', () => {
  let service: InsertBeneficiarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsertBeneficiarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
