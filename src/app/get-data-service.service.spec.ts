import { TestBed, inject } from '@angular/core/testing';

import { GetDataServiceService } from './get-data-service.service';

describe('GetDataServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetDataServiceService]
    });
  });

  it('should be created', inject([GetDataServiceService], (service: GetDataServiceService) => {
    expect(service).toBeTruthy();
  }));
});
