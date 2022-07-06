export interface User {
  name: string;
  surname: string;
  username: string;
}

export interface LoginDTO {
  username: string;
  password: string;
  name: string;
  surname: string;
}

export interface RegisterDTO {
  name: string;
  surname: string;
  username: string;
  password: string;
}
