import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { Error404Component } from './errors/404.component';

import {
  EventsListComponent,
  EventThumbnailComponent,
  EventDetailsComponent,
  CreateEventComponent,
  CreateSessionComponent,
  SessionListComponent,
  UpvoteComponent,
  LocationValidator,
  EventResolver
} from './events/index'

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JQ_TOKEN, TOASTR_TOKEN, Toastr, CollapsibleWellComponent, SimpleModalComponent, ModalTriggerDirective} from './common/index';

import { HttpClientModule } from '@angular/common/http'

let toastr:Toastr = window['toastr'];
let jQuery = window['$'];

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    SimpleModalComponent,
    UpvoteComponent,
    LocationValidator
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: 'canDeactivateCreateEvent',
    useValue: checkDirtyState
  },
  {
    provide: TOASTR_TOKEN, useValue: toastr
  },
  {
    provide: JQ_TOKEN, useValue: jQuery
  },
  EventResolver],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component){
  if(component.isDirty)
    return window.confirm('You have not saved this event, do you really want to cancel?');

    return true;
}