import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';
 
@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
        { id: 11, name: 'Wario' },
  { id: 12, name: 'Pikachu' },
  { id: 13, name: 'Samus' },
  { id: 14, name: 'Simone' },
  { id: 15, name: 'Lucas' },
  { id: 16, name: 'Marth' },
  { id: 17, name: 'Ike' },
  { id: 18, name: 'Snake' },
  { id: 19, name: 'Link' },
  { id: 20, name: 'Toon Link' }
    ];
    return {heroes};
  }
 
  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}