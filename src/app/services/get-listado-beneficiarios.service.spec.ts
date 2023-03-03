import { TestBed } from '@angular/core/testing';

import { GetListadoBeneficiariosService } from './get-listado-beneficiarios.service';

describe('GetListadoBeneficiariosService', () => {
  let service: GetListadoBeneficiariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetListadoBeneficiariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
