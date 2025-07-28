import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../model/character.model';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  getAllCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(`${environment.apiBaseUrl}/api/character`)
  }
}
