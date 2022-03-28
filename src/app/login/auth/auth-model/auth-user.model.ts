import { AuthToken } from "./auth-token.model";

export class AuthUser {
  cpf: string = '';
  telefone: string = '';
  username: string = '';
  password: string = '';
  client_id: string = '538aafbb-1164-4e62-a3f4-7466935e700d';
  client_secret = 'd002c414509a';
  grant_type = 'password';
  token: AuthToken = new AuthToken;
}
