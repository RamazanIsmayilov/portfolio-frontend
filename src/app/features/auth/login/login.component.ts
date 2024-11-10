import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BadgeComponent } from '../../../shared/components/badge/badge.component';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [BadgeComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  type: boolean = true
  myForm!: FormGroup
  submitted: boolean = false;
  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  handleSubmit() {
    this.submitted = true;
    if (this.myForm.valid) {
      this.authService.login(this.myForm.value).subscribe({
        next: (response) => {
          if (response.token) {
            localStorage.setItem('authToken', response.token);
            console.log('Login successful, token saved!');
            this.myForm.reset();
            this.submitted = false;
            this.router.navigate(['/about']);
          }
        },
        error: (error) => {
          console.error('An error occurred during login:', error);
        },
        complete: () => {
          console.log('Login process complete');
        }
      })
    } else {
      console.log('Form is invalid');
    }
  }

  togglePassword() {
    this.type = !this.type;
  }
}
