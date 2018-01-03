import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AbstractControl } from '@angular/forms/src/model';
import { Event } from '../model/event';
@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  eventForm: FormGroup;
  name : AbstractControl;
  description : AbstractControl;
  constructor(private eventService: EventService, private fb: FormBuilder) {
    this.eventForm = fb.group({
      name: ['', Validators.compose([
        Validators.required
      ])],
      description: ['', Validators.compose([
        Validators.required
      ])]
    });

    this.name = this.eventForm.controls['name'];
    this.description = this.eventForm.controls['description'];
  }
  ngOnInit() {
  }

  onSubmit(eventForm: string): void {
    let name = this.name.value;
    let description =this.description.value;
    let event;
    event = new Event(name,description);
    console.log(event)
    this.eventService.addEvent(event).then(_ =>{
      console.log("All good")
    }).catch(error =>{
      console.log("Error")
    })

    
  }

}

