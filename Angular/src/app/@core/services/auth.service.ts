import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { of } from "rxjs";
import { LoginDTO, RegisterDTO, User } from "src/app/models/user";

@Injectable({
  providedIn: "root",
})
export class AuthService {

  springbootBaseUrl: string = 'http://localhost:8080/users';

  constructor(private router: Router, private httpClient: HttpClient) {}

  login(loginData: LoginDTO) {
    //TODO Chiamare il servizio per l'autenticazione e salvare l'utente corrente nel localStorage
    const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Basic ' + btoa(loginData.username+":"+loginData.password)
        })
      };

      return this.httpClient.get<Partial<LoginDTO>>(`${this.springbootBaseUrl}/username/${loginData.username}/password/${loginData.password}`, httpOptions);
      
    /*  const response: Partial<LoginDTO> = {
        name: "Paolino",
        surname: "Paperino",
        username: `${loginData.username}`,
      };
    
    localStorage.setItem("user", JSON.stringify(response));
    
    
    return of('login ok');*/
  }

  saveUser(loginData: Partial<LoginDTO>){
    localStorage.setItem("user", JSON.stringify(loginData));

    return of('login ok');
  }

  register(registerData: Partial<RegisterDTO>) {
    // TODO Chiamare il servizio per la registrazione e redirigere l'utente alla root per il login
    return this.httpClient.post<LoginDTO>(`${this.springbootBaseUrl}/`, registerData);
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

  getUserById(id: number | undefined) {

    return this.httpClient.get<Partial<User>>(`${this.springbootBaseUrl}/${id}`);
  }

}