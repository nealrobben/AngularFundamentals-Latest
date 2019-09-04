
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { EventService } from './shared/events.service';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class EventResolver implements Resolve<any> {

    constructor(private eventService:EventService){}

    resolve(route:ActivatedRouteSnapshot){
        return this.eventService.getEvent(route.params['id']);
    }
}