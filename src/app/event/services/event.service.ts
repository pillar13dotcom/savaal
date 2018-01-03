import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Event } from '../model/event';

@Injectable()
export class EventService {
  event$;
  constructor(private afDb: AngularFireDatabase) {
    this.event$ = this.afDb.list('/events');
   }

  addEvent(event: Event):Promise<any>{
    let postRef = this.event$.push();
    event.eventid =postRef.key;
    return postRef.update(event);
  }

}
