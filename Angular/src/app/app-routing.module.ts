import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./@core/helpers/auth-guard";
import { LoginComponent } from "./@shared/components/login/login.component";
import { MainPageComponent } from "./components/main-page/main-page.component";
import { RegisterComponent } from "./@shared/components/register/register.component";
import { WelcomeComponent } from "./components/welcome/welcome.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { FavoritesComponent } from "./components/favorites/favorites.component";
import { MovieDetailComponent } from "./components/movie/movie-detail/movie-detail.component";
import { GetCommentItemComponent } from "./components/comments/get-comment-item/get-comment-item.component";
import { MoviePopularityComponent } from "./components/movie/movie-popularity/movie-popularity.component";
import { AddCommentItemComponent } from "./components/comments/add-comment-item/add-comment-item.component";

const routes: Routes = [
  {
    path: "",
    component: MainPageComponent,
    canActivate: [AuthGuard],
    children: [
      { path: "home", component: WelcomeComponent },
      { path: "popularity", component: MoviePopularityComponent },
      { path: "profile", component: ProfileComponent },
      { path: "favorites", component: FavoritesComponent },
      { path: "detail/:movieId", component: MovieDetailComponent },
      { path: "", redirectTo: "home", pathMatch: 'full' },
    ],
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "register",
    component: RegisterComponent,
  },
  { path: "**", redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
