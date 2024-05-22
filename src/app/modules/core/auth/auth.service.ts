import { Injectable } from '@angular/core';
import { UserDTO, UserResponseDTO } from '../DTOs/user.dto';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private _http: HttpClient
  ) { }

  getAuthUser(data: UserDTO): Promise<any> {
    return firstValueFrom( this._http.post('http://localhost:3000/auth/', data));
  }
}
