import { Component } from '@angular/core';
import { BadgeComponent } from "../../shared/components/badge/badge.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [BadgeComponent, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  boxItems = [
    { icon: 'fa-regular fa-address-book', label: 'Phone', content: '+994 505721898', colClass: 'col-12 col-sm-12 col-md-6 col-lg-6' },
    { icon: 'fa-regular fa-envelope', label: '', content: 'ramazandev2024@gmail.com', colClass: 'col-12 col-sm-12 col-md-6 col-lg-6' },
    { icon: 'fa-solid fa-map', label: 'Address', content: 'Yeni Ramana qəsəbəsi', colClass: 'col-12 col-sm-12 col-md-12 col-lg-12' }
  ];
}

