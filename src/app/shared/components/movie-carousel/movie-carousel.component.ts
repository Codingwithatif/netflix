import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-movie-carousel',
  templateUrl: './movie-carousel.component.html',
  styleUrls: ['./movie-carousel.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class MovieCarouselComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
