import { MovieService } from './../../shared/services/movie.service';
import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../core/components/header/header.component';
import { BannerComponent } from '../../core/components/banner/banner.component';
import { MovieCarouselComponent } from '../../shared/components/movie-carousel/movie-carousel.component';

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    BannerComponent,
    MovieCarouselComponent,
  ],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.css',
})
export class BrowseComponent implements OnInit {
  // constructor(private auth: AuthService) {}

  auth = inject(AuthService);
  MovieService = inject(MovieService);
  name = JSON.parse(sessionStorage.getItem('loggesInUser')!).name;
  userProfileImg = JSON.parse(sessionStorage.getItem('loggesInUser')!).picture;
  email = JSON.parse(sessionStorage.getItem('loggesInUser')!).email;

  ngOnInit(): void {
    this.MovieService.getMovies().subscribe((res) => {
      console.log(res);
    });
  }

  signOut() {
    sessionStorage.removeItem('loggesInUser');
    this.auth.signOut();
  }
}
