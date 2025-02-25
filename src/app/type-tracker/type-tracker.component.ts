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
}
