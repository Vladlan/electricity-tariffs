import { TestBed } from '@angular/core/testing';

import { ElectricityTariffsService } from './electricity-tariffs.service';

describe('ElectricityTariffsService', () => {
  let service: ElectricityTariffsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElectricityTariffsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
