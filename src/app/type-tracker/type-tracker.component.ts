import { Component } from '@angular/core';

@Component({
  selector: 'app-type-tracker',
  templateUrl: './type-tracker.component.html',
  styleUrls: ['./type-tracker.component.scss']
})
export class TypeTrackerComponent {
  artifact = false;
  creature = false;
  battle = false;
  enchantment = false;
  instant = false;
  sorcery = false;
  land = false;
  kindred = false;
  planeswalker = false;

  // Counters for land and creature
  creatureCount = 0;
  landCount = 0;


  get activeCount(): number {
    return [
      this.artifact, this.creature, this.battle, this.enchantment,
      this.instant, this.sorcery, this.land, this.kindred, this.planeswalker
    ].filter(active => active).length;
  }

  get power(): number {
    return this.activeCount;
  }

  get toughness(): number {
    return 1 + this.activeCount;
  }

  toggleCreature() {
    this.creature = !this.creature;
    if (this.creature) {
      this.creatureCount++;
    } else {
      this.creatureCount = this.creatureCount > 0 ? this.creatureCount - 1 : 0;
    }
  }

  toggleLand() {
    this.land = !this.land;
    if (this.land) {
      this.landCount++;
    } else {
      this.landCount = this.landCount > 0 ? this.landCount - 1 : 0;
    }
  }

}
