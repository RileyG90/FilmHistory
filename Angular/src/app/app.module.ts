import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './@shared/components/login/login.component';
import { LogoutComponent } from './@shared/components/logout/logout.component';
import { RegisterComponent } from './@shared/components/register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { NavbarComponent } from './@shared/components/navbar/navbar.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './@shared/components/footer/footer.component';
import { MovieItemComponent } from './components/movie/movie-item/movie-item.component';
import { MovieComponent } from './components/movie/movie.component';
import { MovieDetailComponent } from './components/movie/movie-detail/movie-detail.component';
import { FavoritesItemComponent } from './components/favorites/favorites-item/favorites-item.component';
import { GetCommentComponent } from './components/comments/get-comment/get-comment.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MainPageComponent,
    LogoutComponent,
    NavbarComponent,
    WelcomeComponent,
    ProfileComponent,
    FavoritesComponent,
    FooterComponent,
    MovieItemComponent,
    MovieComponent,
    MovieDetailComponent,
    FavoritesItemComponent,
    GetCommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }