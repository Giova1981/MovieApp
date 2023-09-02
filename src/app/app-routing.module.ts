import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './Component/dash-board/dash-board.component';
import { DashCardComponent } from './Component/DashCard/dash-card/dash-card.component';
import { DetailComponent } from './Component/Detail/detail/detail.component';
import { LoginComponent } from './Component/Login/login/login.component';
import { MovieListComponent } from './Component/MovieList/movie-list/movie-list.component';
import { ResearchComponent } from './Component/Research/research/research.component';
import { AuthGuard } from './Service/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: DashBoardComponent,
    canActivate: [AuthGuard],
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'search/:movie',
    component: ResearchComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'movie-detail/:id',
    component: DashCardComponent,
    canActivate: [AuthGuard],
  },
  { path: 'detail/:id', component: DetailComponent, canActivate: [AuthGuard] },
  {
    path: 'movie-list',
    component: MovieListComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
