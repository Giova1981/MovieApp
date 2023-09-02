import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ResultsEntity } from 'src/app/Model/movie';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent {
  @Input() movie!: ResultsEntity;

  constructor(private router: Router){}

  onDetail(){
    this.router.navigate(['/detail', this.movie.id]);
  }

}
