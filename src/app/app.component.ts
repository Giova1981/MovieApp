import { Component, OnInit } from '@angular/core';
import { LoadingService } from './Service/loading.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'movies-app';

  constructor(public loading: LoadingService) {}

  ngOnInit() {}
}
