import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/events.service';
import { ActivatedRoute, Params } from '@angular/router';
import { IEvent, ISession } from '../shared/event.model';

@Component({
    templateUrl: './event-details.component.html',
    styles: [`
        .event-image { height: 100px; }
        .container { padding-left: 20px; padding-right: 20px;}
        a {cursor: pointer}
    `]
})
export class EventDetailsComponent implements OnInit {
    
    event:IEvent;
    addMode:boolean;
    filterBy:string = 'all';
    sortBy:string= 'votes';

    constructor(private eventService:EventService, private route:ActivatedRoute){}

    ngOnInit(): void {

        this.route.data.forEach((data) => {
            this.event = data['event'];
            this.addMode = false;
        })
    }

    addSession(){
        this.addMode = true;
    }

    saveNewSession(session:ISession){
        const nextId = Math.max.apply(null,this.event.sessions.map(s => s.id));
        session.id = nextId + 1;
        this.event.sessions.push(session);
        this.eventService.updateEvent(this.event);
        this.addMode = false;
    }

    cancelAddSession(){
        this.addMode = false;
    }
}