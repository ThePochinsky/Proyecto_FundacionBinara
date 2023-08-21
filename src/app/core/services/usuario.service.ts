import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { Observable } from 'rxjs';
import baserUrl from '../helpers/helperUrl';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  userUrl = `${baserUrl}/usuario`;

  constructor(private http: HttpClient) { }

  createUser(usuario: Usuario) {
    return this.http.post(this.userUrl + '/', usuario);
  }

  editUser(usuario: Usuario, id: number) {
    return this.http.put(`${this.userUrl}/${id}`, usuario);
  }

  getUser(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.userUrl}/`);
  }

  searchUser(id: number) {
    return this.http.get(`${this.userUrl}/${id}`);
  }

  disableUser(id: number) {
    return this.http.delete(`${this.userUrl}/${id}`)
  }
}
