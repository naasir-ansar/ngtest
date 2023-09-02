import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { TestModule } from './test/test.module';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, TestModule],
  template: `
    <app-landing></app-landing>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
