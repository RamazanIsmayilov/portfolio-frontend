import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  menuItems = [
    { label: 'About', icon: 'fa-solid fa-address-card', link: '/about' },
    { label: 'Skills', icon: 'fa-solid fa-code', link: '/skills' },
    { label: 'Services', icon: 'fa-solid fa-screwdriver-wrench', link: '/services' },
    { label: 'Projects', icon: 'fa-solid fa-folder-open', link: 'projects' },
    { label: 'Resume', icon: 'fa-solid fa-user-tie', link: '/resume' },
    { label: 'Contact', icon: 'fa-solid fa-phone', link: '/contact' },
  ]
}
