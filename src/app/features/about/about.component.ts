import { Component } from '@angular/core';
import { BadgeComponent } from "../../shared/components/badge/badge.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [BadgeComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
