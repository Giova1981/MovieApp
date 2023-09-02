import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Movie, ResultsEntity } from 'src/app/Model/movie';
import { DataService } from 'src/app/Service/data.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css'],
})
export class DashBoardComponent implements OnInit, OnDestroy {
  noImage = environment.noImage
  latestMovies: ResultsEntity[] | null = null;
  popularMovies: ResultsEntity[] | null = null;
  nowPlayingMovies: ResultsEntity[] | null = null;
  topRatedMovies: ResultsEntity[] | null = null;
  upComingMovies: ResultsEntity[] | null = null;
  trendingMovies: ResultsEntity[] | null = null;
  originals: ResultsEntity[] | null = null;
  actionMovies: ResultsEntity[] | null = null;
  adventureMovies: ResultsEntity[] | null = null;
  animationMovies: ResultsEntity[] | null = null;
  comedyMovies: ResultsEntity[] | null = null;
  documentaryMovies: ResultsEntity[] | null = null;
  scienceFictions: ResultsEntity[] | null = null;
  thrillerMovies: ResultsEntity[] | null = null;

  subLatestMovies: Subscription = new Subscription();
  subPopularMovies: Subscription = new Subscription();
  subNowPlayingMovies: Subscription = new Subscription();
  subTopRatedMovies: Subscription = new Subscription();
  subUpcomingMovies: Subscription = new Subscription();
  subTrendingMovies: Subscription = new Subscription();
  subOriginals: Subscription = new Subscription();
  subActionMovies: Subscription = new Subscription();
  subAdventureMovies: Subscription = new Subscription();
  subAnimationMovies: Subscription = new Subscription();
  subComedyMovies: Subscription = new Subscription();
  subDocumentaryMovies: Subscription = new Subscription();
  subScienceFictions: Subscription = new Subscription();
  subThrillerMovies: Subscription = new Subscription();
  subscriptions: Subscription[] = [];

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.getLatestMovies();
    this.getPopularMovies();
    this.getNowPlayingMovies();
    this.getTopRatedMovies();
    this.getUpcomingMovies();
    this.getTrendingMovies();
    this.getOriginals();
    this.getActionMovies();
    this.getAdventureMovies();
    this.getAnimationMovies();
    this.getComedyMovies();
    this.getDocumentaryMovies();
    this.getScienceFictions();
    this.getThrillerMovies();
  }

  onSelectList(list: string) {
    this.dataService.selectListTitle(list);
    this.router.navigate(['/movie-list']);
  }

  getLatestMovies() {
    this.subLatestMovies = this.dataService
      .getLatestMovies()
      .subscribe((res: Movie) => {
        this.latestMovies = res.results;
        this.subscriptions.push(this.subLatestMovies);
      });
  }

  getPopularMovies() {
    this.subPopularMovies = this.dataService
      .getPopularMovies(2)
      .subscribe((res: Movie) => {
        this.popularMovies = res.results;
        this.subscriptions.push(this.subPopularMovies);
      });
  }

  getNowPlayingMovies() {
    this.subNowPlayingMovies = this.dataService
      .getNowPlayingMovies(3)
      .subscribe((res: Movie) => {
        this.nowPlayingMovies = res.results;
        this.subscriptions.push(this.subNowPlayingMovies);
      });
  }

  getTopRatedMovies() {
    this.subTopRatedMovies = this.dataService
      .getTopRatedMovies()
      .subscribe((res: Movie) => {
        this.topRatedMovies = res.results;
        this.subscriptions.push(this.subTopRatedMovies);
      });
  }

  getUpcomingMovies() {
    this.subUpcomingMovies = this.dataService
      .getUpcomingMovies()
      .subscribe((res: Movie) => {
        this.upComingMovies = res.results;
        this.subscriptions.push(this.subUpcomingMovies);
      });
  }

  getTrendingMovies() {
    this.subTrendingMovies = this.dataService
      .getTrendingMovies(2)
      .subscribe((res: Movie) => {
        this.trendingMovies = res.results;
        this.subscriptions.push(this.subTrendingMovies);
      });
  }

  getOriginals() {
    this.subOriginals = this.dataService
      .getOriginals()
      .subscribe((res: Movie) => {
        this.originals = res.results;
        this.subscriptions.push(this.subOriginals);
      });
  }

  getActionMovies() {
    this.subActionMovies = this.dataService
      .getActionMovies(3)
      .subscribe((res: Movie) => {
        this.actionMovies = res.results;
        this.subscriptions.push(this.subActionMovies);
      });
  }

  getAdventureMovies() {
    this.subAdventureMovies = this.dataService
      .getAdventureMovies()
      .subscribe((res: Movie) => {
        this.adventureMovies = res.results;
        this.subscriptions.push(this.subAdventureMovies);
      });
  }

  getAnimationMovies() {
    this.subAnimationMovies = this.dataService
      .getAnimationMovies(5)
      .subscribe((res: Movie) => {
        this.animationMovies = res.results;
        this.subscriptions.push(this.subAnimationMovies);
      });
  }

  getComedyMovies() {
    this.subComedyMovies = this.dataService
      .getComedyMovies(2)
      .subscribe((res: Movie) => {
        this.comedyMovies = res.results;
        this.subscriptions.push(this.subComedyMovies);
      });
  }

  getDocumentaryMovies() {
    this.subDocumentaryMovies = this.dataService
      .getDocumentaryMovies()
      .subscribe((res: Movie) => {
        this.documentaryMovies = res.results;
        this.subscriptions.push(this.subDocumentaryMovies);
      });
  }

  getScienceFictions() {
    this.subScienceFictions = this.dataService
      .getScienceFiction(4)
      .subscribe((res: Movie) => {
        this.scienceFictions = res.results;
        this.subscriptions.push(this.subScienceFictions);
      });
  }

  getThrillerMovies() {
    this.subThrillerMovies = this.dataService
      .getThrillerMovies(2)
      .subscribe((res: Movie) => {
        this.thrillerMovies = res.results;
        this.subscriptions.push(this.subThrillerMovies);
      });
  }

  ngOnDestroy(): void {
    this.subscriptions.map((sub) => sub.unsubscribe());
  }
}
