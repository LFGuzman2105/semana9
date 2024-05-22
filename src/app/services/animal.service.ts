import { Injectable } from '@angular/core';
import { Animal } from '../models/animal';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  private animales: Animal[] = [];
  private animalesSubject: BehaviorSubject<Animal[]>;
  currentAnimales: Observable<Animal[]>;
  private currentAnimal: Animal;
  private currentId: number;
  
  constructor() { 
    this.animales = [];
    this.animalesSubject = new BehaviorSubject<Animal[]>([]);
    this.currentAnimales = this.animalesSubject.asObservable();
    this.currentAnimal = new Animal('', '');
    this.currentId = 0;
  }

  agregarAnimal(nombre: string, raza: string) {
    this.animales.push(new Animal(nombre, raza));
    this.animalesSubject.next(this.animales);
  }

  eliminarAnimal(animal: Animal) {
    for (let i = 0; i < this.animales.length; i++) {
      if (this.animales[i].getId() == animal.getId()) {
        this.animales.splice(i, 1);
      }
    }

    this.animalesSubject.next(this.animales);
  }

  editarAnimal (id: number, nombre: string, raza: string) {
    for (let i = 0; i < this.animales.length; i++) {
      if (this.animales[i].getId() == id) {
        this.animales[i].setNombre(nombre);
        this.animales[i].setRaza(raza);
      }
    }
  }

  getCurrentAnimal() {
    return this.currentAnimal;
  }

  setCurrentAnimal(animal: Animal) {
    this.currentAnimal = animal;
  }

  getCurrentId() {
    return this.currentId;
  }
  
  setCurrentId(id: number) {
    this.currentId = id;
  }
}