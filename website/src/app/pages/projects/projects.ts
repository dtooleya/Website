import { Component } from '@angular/core';
import { Snake } from '../../components/snake/snake';

@Component({
  selector: 'app-projects',
  imports: [Snake],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
  showCubic = false;
  showRsa = false;
  showWebsite = false;
  showSnake = false;
}
