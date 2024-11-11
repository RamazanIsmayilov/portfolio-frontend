import { Component } from '@angular/core';
import { AdminSidebarComponent } from '../../core/layouts/admin-sidebar/admin-sidebar.component';

@Component({
  selector: 'app-manage-education',
  standalone: true,
  imports: [AdminSidebarComponent],
  templateUrl: './manage-education.component.html',
  styleUrl: './manage-education.component.scss'
})
export class ManageEducationComponent {

}
