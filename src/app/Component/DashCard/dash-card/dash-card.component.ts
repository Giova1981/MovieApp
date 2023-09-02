import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ResultsEntity } from 'src/app/Model/movie';
import { DataService } from 'src/app/Service/data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dash-card',
  templateUrl: './dash-card.component.html',
  styleUrls: ['./dash-card.component.css'],
})
export class DashCardComponent {
  noImage = environment.noImage
  @Input() movie!: ResultsEntity;

  constructor(private router: Router, private dataService: DataService) {}

  onDetail() {
    this.router.navigate(['/detail', this.movie.id]);
  }
}
