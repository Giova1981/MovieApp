import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from 'src/app/Service/data.service';
import { ResultsEntity } from 'src/app/Model/movie';
import { AuthService } from 'src/app/Service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  results: ResultsEntity[] | null = [];
  user: boolean = false;

  constructor(
    private dataService: DataService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authService.user.subscribe(
      (user) => (this.user = user.password.length >= 6)
    );
  }

  onSearch(form: NgForm) {
    let movie = form.value.search;
    this.dataService.searchMovies(movie);
    form.reset();
    this.router.navigate(['/search', movie]);
  }

  onLogout() {
    this.user = false;
    this.authService.logout();
  }
}
