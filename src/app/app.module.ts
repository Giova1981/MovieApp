import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashBoardComponent } from './Component/dash-board/dash-board.component';
import { HeaderComponent } from './Component/Header/header/header.component';
import { LoginComponent } from './Component/Login/login/login.component';
import { FormsModule } from '@angular/forms';
import { ResearchComponent } from './Component/Research/research/research.component';
import { DetailComponent } from './Component/Detail/detail/detail.component';
import { MovieItemComponent } from './Component/Movie/movie-item/movie-item.component';
import { DashCardComponent } from './Component/DashCard/dash-card/dash-card.component';
import { HorizontalScrollDirective } from './Service/app-horizontal-scroll.directive';
import { ShortenTextPipe } from './Service/shorten-text.pipe';
import { LoadingSpinnerComponent } from './Component/Spinner/loading-spinner/loading-spinner.component';
import { InterceptorInterceptor } from './Interceptors/interceptor.interceptor';
import { MovieListComponent } from './Component/MovieList/movie-list/movie-list.component';
import { PaginationComponent } from './Component/pagination/pagination.component';
import { AlertComponent } from './Component/Alert/alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    DashBoardComponent,
    HeaderComponent,
    LoginComponent,
    ResearchComponent,
    DetailComponent,
    MovieItemComponent,
    DashCardComponent,
    HorizontalScrollDirective,
    ShortenTextPipe,
    LoadingSpinnerComponent,
    MovieListComponent,
    PaginationComponent,
    AlertComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
