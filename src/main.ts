import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <li> {{ my }} </li>
    <li> {{ name }} </li>
    <li> {{ is }} </li>
    <li> {{ rajskoo }} </li>
  `,
})

export class App {
  my = 'my';
  name = 'name';
  is = 'is';
  rajskoo = 'rajskoo';
}

bootstrapApplication(App);
