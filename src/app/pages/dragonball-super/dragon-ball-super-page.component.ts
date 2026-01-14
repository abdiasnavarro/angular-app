import { Component, inject } from '@angular/core';
import { CharacterList } from "../components/dragonball/character-list/character-list";
import { DragonballCharacterAdd } from "../components/dragonball/character-add/character-add";
import { DragonballService } from '../services/dragonball.service';

@Component({
  templateUrl: './dragon-ball-super-page.component.html',
  imports: [CharacterList, DragonballCharacterAdd],
})
export class DragonBallSuperPageComponent {
  public dragonBallService = inject(DragonballService);
  
}
