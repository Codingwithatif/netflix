import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
const option = {
  params: {
    include_adult: 'false',
    include_video: 'true',
    language: 'en-US',
    page: '1',
    sort_by: 'popularity.desc',
  },

  Headers: {
    accept: 'application/json',
    Authorization:
      'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YmE4MTlmMTIwNTA4MDRjODkwZDQ2NWJkMmUwZmRiOCIsInN1YiI6IjY2MmRmNjcxNjBjNzUxMDEyMzY0Y2E2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EeKth5ZuYnIl8EOtT_mIRXJNQo3ITesgxD-YMHisGuw',
  },
};

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  http = inject(HttpClient);

  getMovies() {
    return this.http.get<any>(
      'https://api.themoviedb.org/3/discover/movie',
      option
    );
  }
}
