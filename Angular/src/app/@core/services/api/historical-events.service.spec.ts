import { TestBed } from '@angular/core/testing';

import { HistoricalEventsService } from './historical-events.service';

describe('HistoricalEventsService', () => {
  let service: HistoricalEventsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoricalEventsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
