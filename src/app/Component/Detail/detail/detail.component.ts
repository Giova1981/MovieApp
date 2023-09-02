import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/Service/data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit, OnDestroy {
  noImage = environment.noImage
  id: number = 0;
  movieDetail: any;
  videoMovie: any;
  movieCast: any;
  error: string | null = null;

  private routeSub!: Subscription;
  private movieSub!: Subscription;
  private videoSub!: Subscription;
  private castSub!: Subscription;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
    });

    this.getMovieDetails(this.id);
    this.getVideo(this.id);
    this.getMovieCast(this.id);
  }

  getMovieDetails(id: number) {
    this.movieSub = this.dataService.getMovieDetail(id).subscribe({
      next: (result: any) => {
        this.movieDetail = result;
      },
      error: (errorMessage) => {
        this.error = errorMessage.error.status_message;
      },
    });
  }

  getVideo(id: number) {
    this.videoSub = this.dataService.getMovieVideo(id).subscribe((result) => {
      result.results.forEach((element: any) => {
        if (element.type === 'Trailer') {
          this.videoMovie = element.key;
        }
      });
    });
  }

  getMovieCast(id: number) {
    this.castSub = this.dataService.getMovieCast(id).subscribe((result) => {
      this.movieCast = result.cast;
    });
  }

  onHandleError() {
    this.error = null;
    this.router.navigate(['/dashboard']);
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
    this.movieSub.unsubscribe();
    this.videoSub.unsubscribe();
    this.castSub.unsubscribe();
  }
}
