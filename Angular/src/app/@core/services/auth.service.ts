import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { of } from "rxjs";
import { LoginDTO, RegisterDTO, User } from "src/app/models/user";

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: "root",
})
export class AuthService {

  springbootBaseUrl: string = 'http://localhost:8080/users';

  constructor(private router: Router, private httpClient: HttpClient) {}

  login(loginData: LoginDTO) {
    // TODO Chiamare il servizio per l'autenticazione e salvare l'utente corrente nel localStorage
    //const headers = new HttpHeaders({Authoirization: 'Basic' + btoa(loginData.username+":"+loginData.password)})
    const httpOptions = {
        headers: new HttpHeaders({
          'Authorization': 'Basic ' + btoa(loginData.username+":"+loginData.password)
        })
      };
      this.httpClient.get<string>(`${this.springbootBaseUrl}/username/${loginData.username}/password/${loginData.password}`, httpOptions);
    
    
      const response: User = {
        name: "Paolino",
        surname: "Paperino",
        username: `${loginData.username}`
      };

    
    localStorage.setItem("user", JSON.stringify(response));

    

    return of('login ok');
  }

  register(registerData: Partial<RegisterDTO>) {
    // TODO Chiamare il servizio per la registrazione e redirigere l'utente alla root per il login
    return this.httpClient.post<string>(`${this.springbootBaseUrl}/`, registerData);
    //this.router.navigateByUrl("/");
    //`${this.springbootBaseUrl}`
  }

  logout() {
    localStorage.removeItem("user");
  }

  isAuthenticated() {
    return !!localStorage.getItem("user");
  }

  getCurrentUser() {
    const user = JSON.parse(localStorage.getItem("user") || '') as User;
    return user;
  }

}
