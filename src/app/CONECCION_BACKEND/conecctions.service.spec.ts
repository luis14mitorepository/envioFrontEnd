import { TestBed } from '@angular/core/testing';

import { ConecctionsService } from './conecctions.service';

describe('ConecctionsService', () => {
  let service: ConecctionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConecctionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
