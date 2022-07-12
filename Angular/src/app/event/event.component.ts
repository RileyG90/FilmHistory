import { ChangeDetectionStrategy, Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { HistoricalEventsService } from '../@core/services/api/historical-events.service';
import { Doc } from '../models/historical-events';

@Component({
  selector: 'tnv-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class EventComponent implements OnInit {

  @Input() filterGteDate: string = "";
  @Input() filterLteDate: string = "";

  events: Partial<Doc>[] = [];

  constructor(private historicalEventsService: HistoricalEventsService) { }

  ngOnChanges(): void {
      
    this.historicalEventsService.getHistoricalEventsByDateRange(this.filterGteDate, this.filterLteDate).subscribe({
      next: (res) => {
        this.events = res.response.docs;
        console.log(this.events);
      }   
    });   
  }

  ngOnInit(): void {
  }

}
