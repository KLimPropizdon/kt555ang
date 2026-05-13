import { TestBed } from '@angular/core/testing';

import { Work } from './work';

describe('Work', () => {
  let service: Work;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Work);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
