import { Component, Input, OnInit } from '@angular/core';
import { HistoricalEventsService } from 'src/app/@core/services/api/historical-events.service';
import { Doc } from '../../../models/historical-events';

@Component({
  selector: 'tnv-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.scss']
})
export class EventItemComponent implements OnInit {
  @Input() filterGteDate: string = "";
  @Input() filterLteDate: string = "";
  @Input() event: Partial<Doc> = {};
  
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
