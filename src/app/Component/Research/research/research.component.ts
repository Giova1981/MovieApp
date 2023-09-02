import { Component, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { ResultsEntity } from 'src/app/Model/movie';
import { DataService } from 'src/app/Service/data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.css'],
})
export class ResearchComponent implements OnInit, OnDestroy {
  results: ResultsEntity[] = [];
  totalPagesResults: number = 1;
  movieSearch: string = '';

  @Output() totalPages: number = 1;
  @Output() currentPage: number = 1;

  private subRoute!: Subscription;
  noImage = environment.noImage

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.subRoute = this.route.params.subscribe((params: Params) => {
      this.movieSearch = params['movie'];
    });
    this.dataService.moviesFound.subscribe((data: any) => {
      this.results = data.results;
      this.totalPagesResults = data.total_pages;
      this.totalPagesResults > 1 && this.totalPagesResults < 8
        ? (this.totalPages = this.totalPagesResults)
        : this.totalPagesResults > 7
        ? (this.totalPages = 7)
        : null;
    });
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.dataService.searchMovies(this.movieSearch, page);
  }

  ngOnDestroy(): void {
    this.subRoute.unsubscribe();
  }
}
