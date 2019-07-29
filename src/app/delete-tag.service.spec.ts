import { TestBed } from '@angular/core/testing';

import { DeleteTagService } from './delete-tag.service';

describe('DeleteTagService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeleteTagService = TestBed.get(DeleteTagService);
    expect(service).toBeTruthy();
  });
});
