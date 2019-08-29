import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { EventService } from './shared/events.service';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class EventListResolver implements Resolve<any> {

    constructor(private eventService:EventService){}

    resolve(){
        return this.eventService.getEvents().pipe(map(events => events))
    }
}