import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Input({ required: true }) userImg: string = '';
  navList = [
    'Home',
    'TV Shows',
    'News & Popular',
    'MY List',
    'Browse By language',
  ];
}
