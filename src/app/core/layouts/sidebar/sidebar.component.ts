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
    { label: 'About', icon: 'fa-solid fa-user-pen', link: '/about' },
    { label: 'Skills', icon: 'fa-solid fa-dumbbell', link: '/skills' },
    { label: 'Services', icon: 'fa-solid fa-screwdriver-wrench', link: '/services' },
    { label: 'Projects', icon: 'fa-solid fa-briefcase', link: 'projects' },
    { label: 'Resume', icon: 'fa-solid fa-building-columns', link: '/resume' },
    { label: 'Contact', icon: 'fa-regular fa-paper-plane', link: '/contact' },
  ]
}
