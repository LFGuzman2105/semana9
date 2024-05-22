import { Component } from '@angular/core';
import { AnimalService } from '../../services/animal.service';
import { Animal } from '../../models/animal';
import { RouterModule } from '@angular/router';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [RouterModule, MatTableModule, MatIconModule, MatButtonModule],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.scss'
})
export class TablaComponent {
  animales: Animal[];
  displayedColumns: string[];
  dataSource = new MatTableDataSource<Animal>;
  
  constructor(private animalService: AnimalService) {
    this.animales = [];
    this.displayedColumns = ['nombre', 'raza', 'borrar', 'editar'];
    
    this.animalService.currentAnimales.subscribe(animales => {
      this.animales = animales;
    });
    
    this.dataSource = new MatTableDataSource(this.animales);
    this.animalService.setCurrentId(0);
  }

  borrar(animal: Animal) {
    this.animalService.eliminarAnimal(animal);
    this.dataSource = new MatTableDataSource(this.animales);
  }

  editar(animal: Animal) {
    this.animalService.setCurrentAnimal(animal)
    this.animalService.setCurrentId(animal.getId());
  }
}