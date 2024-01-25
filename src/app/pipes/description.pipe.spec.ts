import { TestBed } from '@angular/core/testing';

import { DescriptionPipe } from './description.pipe';

describe('DescriptionService', () => {
  let service: DescriptionPipe;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DescriptionPipe);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
