import { TestBed, inject } from '@angular/core/testing';

import { CoffeecornerService } from './coffeecorner.service';

describe('CoffeecornerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoffeecornerService]
    });
  });

  it('should be created', inject([CoffeecornerService], (service: CoffeecornerService) => {
    expect(service).toBeTruthy();
  }));
});
