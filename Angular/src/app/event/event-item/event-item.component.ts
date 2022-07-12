import { Component, Input, OnInit } from '@angular/core';
import { Doc } from '../../models/historical-events';

@Component({
  selector: 'tnv-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.scss']
})
export class EventItemComponent implements OnInit {

   @Input() event: Partial<Doc> = {};


  constructor() { }

  

  ngOnInit(): void {
  }

}
