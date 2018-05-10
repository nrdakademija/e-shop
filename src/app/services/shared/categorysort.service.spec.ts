import { TestBed, inject } from '@angular/core/testing';

import { CategorysortService } from './categorysort.service';

describe('CategorysortService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategorysortService]
    });
  });

  it('should be created', inject([CategorysortService], (service: CategorysortService) => {
    expect(service).toBeTruthy();
  }));
});
