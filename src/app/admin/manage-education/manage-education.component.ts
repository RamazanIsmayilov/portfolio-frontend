import { Component } from '@angular/core';
import { AdminSidebarComponent } from '../../core/layouts/admin-sidebar/admin-sidebar.component';
import { ModalComponent } from "../../shared/components/modal/modal.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-manage-education',
  standalone: true,
  imports: [ModalComponent, CommonModule],
  templateUrl: './manage-education.component.html',
  styleUrl: './manage-education.component.scss'
})
export class ManageEducationComponent {
  isModalOpen = false; 

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

}
