import { TestBed } from '@angular/core/testing';

import { PeroidicService } from './peroidic.service';

describe('PeroidicService', () => {
  let service: PeroidicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeroidicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
