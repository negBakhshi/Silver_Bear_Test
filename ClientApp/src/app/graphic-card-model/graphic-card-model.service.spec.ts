import { TestBed } from '@angular/core/testing';

import { GraphicCardModelService } from './graphic-card-model.service';

describe('GraphicCardModelService', () => {
  let service: GraphicCardModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GraphicCardModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
