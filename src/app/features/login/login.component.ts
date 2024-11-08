import { Component } from '@angular/core';
import { BadgeComponent } from "../../shared/components/badge/badge.component";
import { CommonModule } from '@angular/common';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [BadgeComponent, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  type: boolean = true
  myForm!: FormGroup
  submitted: boolean = false;

  togglePassword() {
    this.type = !this.type;
  }
}
