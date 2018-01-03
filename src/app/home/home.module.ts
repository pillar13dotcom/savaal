import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SavaalHeaderComponent } from './savaal-header/savaal-header.component';
import { SavaalBodyComponent } from './savaal-body/savaal-body.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports:[
    SavaalHeaderComponent,
    SavaalBodyComponent
  ],
  declarations: [ SavaalHeaderComponent, SavaalBodyComponent]
})
export class HomeModule { }
