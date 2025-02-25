import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TypeTrackerService {
  private types = [
    'artifact', 'creature', 'battle', 'enchantment',
    'instant', 'sorcery', 'land', 'kindred', 'planeswalker'
  ];
  private checkedTypes: Record<string, boolean> = {};
  private power: number = 0;
  private toughness: number = 1;

  constructor() {
    this.types.forEach(type => this.checkedTypes[type] = false);
    this.loadState();
  }

  getTypes(): string[] {
    return this.types;
  }

  toggleType(type: string): void {
    if (!this.checkedTypes[type]) {
      this.checkedTypes[type] = true;
      this.power++;
      this.toughness++;
    } else {
      this.checkedTypes[type] = false;
      this.power--;
      this.toughness--;
    }
    this.saveState();
  }

  isActive(type: string): boolean {
    return this.checkedTypes[type] || false;
  }

  getPower(): number {
    return this.power;
  }

  getToughness(): number {
    return this.toughness;
  }

  private saveState(): void {
    localStorage.setItem('typeTrackerState', JSON.stringify(this.checkedTypes));
    localStorage.setItem('power', JSON.stringify(this.power));
    localStorage.setItem('toughness', JSON.stringify(this.toughness));
  }

  private loadState(): void {
    const savedState = localStorage.getItem('typeTrackerState');
    if (savedState) {
      this.checkedTypes = JSON.parse(savedState);
    }
    const savedPower = localStorage.getItem('power');
    if (savedPower) {
      this.power = JSON.parse(savedPower);
    }
    const savedToughness = localStorage.getItem('toughness');
    if (savedToughness) {
      this.toughness = JSON.parse(savedToughness);
    }
  }
}
