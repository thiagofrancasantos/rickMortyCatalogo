import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterListComponent } from './feature/character/character-list/character-list.component';
import { LocationListComponent } from './feature/location/location-list/location-list.component';
import { CharacterCardComponent } from './feature/character/character-card/character-card.component';

const routes: Routes = [
  {
    path: '',
    component: CharacterListComponent
  },
  {
    path: 'home',
    component: CharacterListComponent
  },
  {
    path: 'character-card/:id',
    component: CharacterCardComponent
  },
  {
    path: 'location-list',
    component: LocationListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
