import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { Character } from '../model/character.model';
import { CharacterCard } from '../model/character-card.model';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }


  getAllCharacters(): Observable<Character[]> {
    return this.http.get<any>(`${environment.apiBaseUrl}/api/character`).pipe(
      map(response => response.results.map((apiChar: any) => ({
        id: apiChar.id,
        name: apiChar.name,
        status: apiChar.status,
        species: apiChar.species,
        imageUrl: apiChar.image,         
        locationName: apiChar.location.name
      }))),
      catchError(error => {
        console.error('Erro ao buscar personagens:', error);
        return of([]);
      })
    );
  }

  getCharacterById(id: string): Observable<CharacterCard | null> {
    return this.http.get<any>(`${environment.apiBaseUrl}/api/character/${id}`).pipe(
      map(apiChar => ({
        id: apiChar.id,
        name: apiChar.name,
        status: apiChar.status,
        species: apiChar.species,
        gender: apiChar.gender,
        imageUrl: apiChar.image,
        locationName: apiChar.location.name,
        created: apiChar.created 
      })),
      catchError(error => {
        console.error(`Erro ao buscar personagem com ID ${id}:`, error);
        return of(null);
      })
    );
  }
}
