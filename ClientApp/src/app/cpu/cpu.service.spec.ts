import { TestBed } from '@angular/core/testing';

import { CPUService } from './cpu.service';

describe('CpuService', () => {
  let service: CPUService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CPUService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
