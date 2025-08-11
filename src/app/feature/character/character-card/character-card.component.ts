import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharacterService } from '../services/character.service';
import { Subscription } from 'rxjs';
import { CharacterCard } from '../model/character-card.model';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css']
})
export class CharacterCardComponent implements OnInit, OnDestroy {
  id: string | null = null;
  model?: CharacterCard | null;

  routeSubscription?: Subscription;
  getCharacterSubscription?: Subscription;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private characterService: CharacterService
  ){}

  ngOnInit(): void {
    this.routeSubscription = this.route.paramMap.subscribe((params) =>{
      this.id = params.get('id');
      if (this.id) {
        this.getCharacterSubscription = this.characterService.getCharacterById(this.id).subscribe({
          next: (response) => {
            this.model = response;
          },
          error: (err) => console.error('Erro ao buscar personagem:', err)
        });
      }  
    })
  }

    
  ngOnDestroy(): void {
    this.routeSubscription?.unsubscribe();
    this.getCharacterSubscription?.unsubscribe();
  }
    

}
