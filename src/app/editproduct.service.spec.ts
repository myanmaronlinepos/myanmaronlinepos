import { TestBed } from '@angular/core/testing';

import { EditproductService } from './editproduct.service';

describe('EditproductService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EditproductService = TestBed.get(EditproductService);
    expect(service).toBeTruthy();
  });
});
