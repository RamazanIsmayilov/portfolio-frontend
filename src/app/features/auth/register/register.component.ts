import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BadgeComponent } from '../../../shared/components/badge/badge.component';
import { AuthService } from '../../../core/services/auth.service';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [BadgeComponent, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {
  type: boolean = true;
  myForm!: FormGroup /* myForm: FormGroup =  new FormGroup({}); baslangic deyeri bu sekildede yazmaq olar */
  submitted: boolean = false;
  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  handleSubmit() {
    this.submitted = true;
    if (this.myForm.valid) {
      this.authService.register(this.myForm.value).subscribe({
        next: () => {
          console.log('Data saved successfully!');
          this.myForm.reset();
          this.submitted = false;
          this.router.navigate(['/login']);
        },
        error: (error) => {
          console.error('An error occurred while saving data:', error);
        },
        complete: () => {
          console.log('Register process complete');
        }
      });
    } else {
      console.log('Form is invalid');
    }
  }

  togglePassword() {
    this.type = !this.type;
  }
}