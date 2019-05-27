import { TestBed } from '@angular/core/testing';

import { VigilanciasService } from './vigilancias.service';

describe('VigilanciasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VigilanciasService = TestBed.get(VigilanciasService);
    expect(service).toBeTruthy();
  });
});
