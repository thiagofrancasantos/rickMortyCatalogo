import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../model/character.model';
import { CharacterService } from '../services/character.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
  characters$?: Observable<Character[]>
  
  constructor(private characterService: CharacterService){}
  
  ngOnInit(): void {
    this.characters$ = this.characterService.getAllCharacters();

    this.characters$.subscribe({
      next: (characteres) => console.log('Personagens:', characteres),
      error: (error) => console.error('Erro ao carregar personagens:', error)
    });
  }

}
