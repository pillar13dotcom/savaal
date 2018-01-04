import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-savaal-body',
  templateUrl: './savaal-body.component.html',
  styleUrls: ['./savaal-body.component.css']
})
export class SavaalBodyComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  addEvent(){
    this.router.navigate(['events/add-event']);
  }

}
