import { Component, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { ResultsEntity } from 'src/app/Model/movie';
import { DataService } from 'src/app/Service/data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit, OnDestroy {
  noImage = environment.noImage;
  results: ResultsEntity[] | null = [];
  genre: string = '';
  pageTitle: string = '';
  @Output() totalPages: number = 7;
  @Output() currentPage: number = 1;

  private subList!: Subscription;
  private subTitle!: Subscription;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getTitle();
    this.getList(this.genre);
  }

  getTitle() {
    this.subTitle = this.dataService.moviesListTitle.subscribe(
      (title: string) => {
        this.genre = title;
        this.pageTitle = (title.charAt(0).toLocaleUpperCase() + title.slice(1))
          .split('-')
          .join(' ');
      }
    );
  }

  getList(genre: string = '', page: number = 1) {
    if (genre === 'trending-Movies') {
      this.subList = this.dataService
        .getTrendingMovies(page)
        .subscribe((movie) => {
          this.results = movie.results;
        });
    } else if (genre === 'popular-Movies') {
      this.subList = this.dataService
        .getPopularMovies(page)
        .subscribe((movie) => {
          this.results = movie.results;
        });
    } else if (genre === 'upcoming-Movies') {
      this.subList = this.dataService
        .getUpcomingMovies(page)
        .subscribe((movie) => {
          this.results = movie.results;
        });
    } else if (genre === 'now-Playing-Movies') {
      this.subList = this.dataService
        .getNowPlayingMovies(page)
        .subscribe((movie) => {
          this.results = movie.results;
        });
    } else if (genre === 'originals-Movies') {
      this.subList = this.dataService.getOriginals(page).subscribe((movie) => {
        this.results = movie.results;
      });
    } else if (genre === 'action-Movies') {
      this.subList = this.dataService
        .getActionMovies(page)
        .subscribe((movie) => {
          this.results = movie.results;
        });
    } else if (genre === 'adventure-Movies') {
      this.subList = this.dataService
        .getAdventureMovies(page)
        .subscribe((movie) => {
          this.results = movie.results;
        });
    } else if (genre === 'animation-Movies') {
      this.subList = this.dataService
        .getAnimationMovies(page)
        .subscribe((movie) => {
          this.results = movie.results;
        });
    } else if (genre === 'comedy-Movies') {
      this.subList = this.dataService
        .getComedyMovies(page)
        .subscribe((movie) => {
          this.results = movie.results;
        });
    } else if (genre === 'documentary-Movies') {
      this.subList = this.dataService
        .getDocumentaryMovies(page)
        .subscribe((movie) => {
          this.results = movie.results;
        });
    } else if (genre === 'science-Fictions') {
      this.subList = this.dataService
        .getScienceFiction(page)
        .subscribe((movie) => {
          this.results = movie.results;
        });
    } else if (genre === 'thriller-Movies') {
      this.subList = this.dataService
        .getThrillerMovies(page)
        .subscribe((movie) => {
          this.results = movie.results;
        });
    }
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.getList(this.genre, page);
  }

  ngOnDestroy(): void {
    this.subTitle.unsubscribe();
    this.subList.unsubscribe();
  }
}
