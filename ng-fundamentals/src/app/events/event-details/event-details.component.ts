import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/events.service';

@Component({
    templateUrl: './event-details.component.html',
    styles: [`
        .event-image { height: 100px; }
        .container { padding-left: 20px; padding-right: 20px;}
    `]
})
export class EventDetailsComponent implements OnInit {
    
    event:any;

    constructor(private eventService:EventService){}

    ngOnInit(): void {
        this.event = this.eventService.getEvent(1);
    }

}