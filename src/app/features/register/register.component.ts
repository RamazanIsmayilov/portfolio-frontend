import { Component, OnInit } from '@angular/core';
import { BadgeComponent } from "../../shared/components/badge/badge.component";
import { AuthService } from '../../core/services/auth.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
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
  constructor(private authService: AuthService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
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
        },
        error: (error) => {
          console.error('An error occurred while saving data:', error);
        },
        complete: () => {
          console.log('Observable completed');
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