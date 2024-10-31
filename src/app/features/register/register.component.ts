import { Component } from '@angular/core';
import { BadgeComponent } from "../../shared/components/badge/badge.component";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [BadgeComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

}
