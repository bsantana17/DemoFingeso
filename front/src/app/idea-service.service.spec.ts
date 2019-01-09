import { TestBed } from '@angular/core/testing';

import { IdeaServiceService } from './idea-service.service';

describe('IdeaServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IdeaServiceService = TestBed.get(IdeaServiceService);
    expect(service).toBeTruthy();
  });
});
