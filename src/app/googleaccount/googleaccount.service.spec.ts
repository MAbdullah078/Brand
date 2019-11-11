import { TestBed } from '@angular/core/testing';

import { GoogleaccountService } from './googleaccount.service';

describe('GoogleaccountService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GoogleaccountService = TestBed.get(GoogleaccountService);
    expect(service).toBeTruthy();
  });
});
