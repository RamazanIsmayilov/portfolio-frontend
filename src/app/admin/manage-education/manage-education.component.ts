import { Component, OnInit } from '@angular/core';
import { ModalComponent } from "../../shared/components/modal/modal.component";
import { CommonModule, DatePipe } from '@angular/common';
import { EducationService } from '../../core/services/education.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FileUrlPipe } from "../../shared/pipes/file-url.pipe";

@Component({
  selector: 'app-manage-education',
  standalone: true,
  imports: [ModalComponent, CommonModule, ReactiveFormsModule, FormsModule, FileUrlPipe],
  providers: [DatePipe],
  templateUrl: './manage-education.component.html',
  styleUrl: './manage-education.component.scss'
})
export class ManageEducationComponent implements OnInit {
  isModalOpen: boolean = false;
  myEducationForm!: FormGroup;
  selectedImage: File | null = null;
  educationList: any[] = [];
  selectedEducationId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private educationService: EducationService,
  ) { }


  ngOnInit(): void {
    this.myEducationForm = this.fb.group({
      startDate: ['', Validators.required],
      endDate: [''],
      companyName: ['', Validators.required],
      position: ['', Validators.required],
      description: ['', Validators.required],
      image: [null],
    });

    this.loadEducationList();
  }

  loadEducationList() {
    this.educationService.getAllEducations().subscribe(data => {
      this.educationList = data.map((education: any) => ({
        ...education,
        endDate: education.endDate || 'present',
      }));
    });
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.myEducationForm.patchValue({ image: file });
      this.selectedImage = file;
    }
  }

  handleSubmit(): void {
    if (this.myEducationForm.valid) {
      const formData = new FormData();
      Object.entries(this.myEducationForm.value).forEach(([key, value]) => {
        if (key === 'endDate' && value === 'present') {
          formData.append(key, ''); 
        } else {
          formData.append(key, value as any);
        }
      });
  
      if (this.selectedEducationId) {
        this.updateEducation(formData);
      } else {
        this.educationService.addEducation(formData).subscribe({
          next: () => {
            console.log('Data saved successfully!');
            this.myEducationForm.reset();
            this.selectedImage = null;
            this.selectedEducationId = null;
            this.closeModal();
            this.loadEducationList();
          },
          error: (error) => {
            console.error('An error occurred while saving data:', error);
          },
          complete: () => {
            console.log('Education creation complete');
          }
        });
      }
    } else {
      console.log('Form invalid', this.myEducationForm.errors);
    }
  }
  
  
  

  updateEducation(formData: FormData): void {
    if (this.selectedEducationId) {
      this.educationService.updateEducation(this.selectedEducationId, formData).subscribe({
        next: () => {
          console.log('Education updated successfully!');
          this.myEducationForm.reset();
          this.selectedImage = null;
          this.selectedEducationId = null; 
          this.closeModal();
          this.loadEducationList();
        },
        error: (error) => {
          console.error('An error occurred while updating education:', error);
        },
        complete: () => {
          console.log('Education update process complete');
        }
      });
    }
  }

  deleteEducation(id: string) {
    this.educationService.deleteEducation(id).subscribe(() => {
      this.educationList = this.educationList.filter(education => education.id !== id);
      this.loadEducationList()
    });
  }

  openModal(education: any = null): void {
    this.isModalOpen = true;
    
    if (education) {
      this.selectedEducationId = education._id;
      this.myEducationForm.patchValue({
        startDate: education.startDate,
        endDate: education.endDate || 'present', 
        companyName: education.companyName,
        position: education.position,
        description: education.description,
      });
      if (education.image && typeof education.image === 'string') {
        this.selectedImage = null; 
      } else {
        this.selectedImage = education.image ? education.image : null;
      }
    } else {
      this.myEducationForm.reset();
      this.selectedImage = null;
      this.selectedEducationId = null; 
    }
  }
  

  closeModal(): void {
    this.isModalOpen = false;
    this.selectedEducationId = null; 
  }
}
