import { Component } from '@angular/core';
import { BadgeComponent } from "../../shared/components/badge/badge.component";
import { AuthService } from '../../core/services/auth.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [BadgeComponent, CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  type: boolean = true;
  userData = {
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  };
  myForm: FormGroup
  constructor(
    private authService: AuthService,
    private fb: FormBuilder

  ) {
    this.myForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  handleSubmit() {
    this.authService.register(this.userData).subscribe({
      next: () => {
        console.log('Data saved successfully!');
        this.userData = { firstname: '', lastname: '', email: '', password: '' };
      },
      error: (error) => {
        console.error('An error occurred while saving data:', error);
      }
    });
  }

  togglePassword() {
    this.type = !this.type;
  }
}