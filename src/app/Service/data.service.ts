import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movie } from '../Model/movie';


@Injectable({
  providedIn: 'root',
})
export class DataService {
  url: string = 'https://api.themoviedb.org/3';
  moviesFound = new BehaviorSubject<any>({});
  moviesListTitle = new BehaviorSubject<string>('');
  searchMovie: string = '';

  constructor(private http: HttpClient) {}

  selectListTitle(listTitle: string) {
    this.moviesListTitle.next(listTitle);
  }

  getLatestMovies(): Observable<any> {
    return this.http.get<any>(
      this.url + '/discover/movie?',
      environment.options
    );
  }

  getPopularMovies(page: number = 1): Observable<Movie> {
    return this.http.get<Movie>(
      this.url + `/movie/popular?&page=${page}`,
      environment.options
    );
  }

  getNowPlayingMovies(page: number = 1): Observable<Movie> {
    return this.http.get<Movie>(
      this.url + `/movie/now_playing?&page=${page}`,
      environment.options
    );
  }

  getTopRatedMovies(page: number = 1): Observable<Movie> {
    return this.http.get<Movie>(
      this.url + `/movie/top_rated?&page=${page}`,
      environment.options
    );
  }

  getUpcomingMovies(page: number = 1): Observable<Movie> {
    return this.http.get<Movie>(
      this.url + `/movie/upcoming?&page=${page}`,
      environment.options
    );
  }

  getTrendingMovies(page: number = 1): Observable<Movie> {
    return this.http.get<Movie>(
      this.url + `/trending/all/week?&page=${page}`,
      environment.options
    );
  }

  getOriginals(page: number = 1): Observable<Movie> {
    return this.http.get<Movie>(
      this.url + `/discover/tv?&page=${page}`,
      environment.options
    );
  }

  getMovieDetail(id: number): Observable<Movie> {
    return this.http.get<Movie>(this.url + `/movie/${id}`, environment.options);
  }

  getMovieVideo(data: any): Observable<any> {
    return this.http.get<any>(
      this.url + `/movie/${data}/videos`,
      environment.options
    );
  }

  getMovieCast(data: any): Observable<any> {
    return this.http.get<any>(
      this.url + `/movie/${data}/credits`,
      environment.options
    );
  }

  searchMovies(movie: string = '', page: number = 1) {
    return this.http
      .get<Movie>(
        this.url + `/search/movie?query=${movie}&page=${page}`,
        environment.options
      )
      .subscribe((res) => {
        this.moviesFound.next(res);
      });
  }

  getActionMovies(page: number = 1): Observable<Movie> {
    return this.http.get<Movie>(
      this.url + `/discover/movie?page=${page}&with_genres=28`,
      environment.options
    );
  }

  getAdventureMovies(page: number = 1): Observable<Movie> {
    return this.http.get<Movie>(
      this.url + `/discover/movie?page=${page}&with_genres=12`,
      environment.options
    );
  }

  getAnimationMovies(page: number = 1): Observable<Movie> {
    return this.http.get<Movie>(
      this.url + `/discover/movie?page=${page}&with_genres=16`,
      environment.options
    );
  }

  getComedyMovies(page: number = 1): Observable<Movie> {
    return this.http.get<Movie>(
      this.url + `/discover/movie?page=${page}&with_genres=35`,
      environment.options
    );
  }

  getDocumentaryMovies(page: number = 1): Observable<Movie> {
    return this.http.get<Movie>(
      this.url + `/discover/movie?page=${page}&with_genres=99`,
      environment.options
    );
  }

  getScienceFiction(page: number = 1): Observable<Movie> {
    return this.http.get<Movie>(
      this.url + `/discover/movie?page=${page}&with_genres=878`,
      environment.options
    );
  }

  getThrillerMovies(page: number = 1): Observable<Movie> {
    return this.http.get<Movie>(
      this.url + `/discover/movie?page=${page}&with_genres=53`,
      environment.options
    );
  }
}
