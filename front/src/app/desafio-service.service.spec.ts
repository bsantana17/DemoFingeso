import { TestBed } from '@angular/core/testing';

import { DesafioServiceService } from './desafio-service.service';

describe('DesafioServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DesafioServiceService = TestBed.get(DesafioServiceService);
    expect(service).toBeTruthy();
  });
});
