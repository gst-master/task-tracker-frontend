import { Component } from '@angular/core';
import {TaskItemComponent} from './task-item/task-item.component';

@Component({
  selector: 'app-root',
  imports: [TaskItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'task-tracker-frontend';
}
