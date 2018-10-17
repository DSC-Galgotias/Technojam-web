import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './events.component';
import { RouterModule } from '@angular/router';



const routes = [
  {
    name: 'events',
    path: '',
    component: EventsComponent,
  }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EventsComponent],
  exports : []
})
export class EventsModule { }
