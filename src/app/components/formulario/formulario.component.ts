import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AnimalService } from '../../services/animal.service';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [MatInputModule, FormsModule, MatSelectModule, MatIconModule, MatButtonModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent {
  nombre: string;
  raza: string;
  id: number;

  constructor(private animalService: AnimalService) { 
    this.id = this.animalService.getCurrentId();

    if (this.id > 0) {
      this.nombre = this.animalService.getCurrentAnimal().getNombre();
      this.raza = this.animalService.getCurrentAnimal().getRaza();
    }
    else {
      this.nombre = '';
      this.raza = '';
    }
  }

  grabar() {
    if (this.id > 0) {
      if (this.nombre == "" || this.raza == "") {
        alert("Debe ingresar un nombre y una raza");
      }
      else {
        this.animalService.editarAnimal(this.id, this.nombre, this.raza);
        this.nombre = '';
        this.raza = '';
        this.id = 0;
        alert("Animal editado correctamente");
      }
    }
    else {
      if (this.nombre == "" || this.raza == "") {
        alert("Debe ingresar un nombre y una raza");
      }
      else {
        this.animalService.agregarAnimal(this.nombre, this.raza);
        this.nombre = '';
        this.raza = '';
        alert("Animal agregado correctamente");
      }
    }
  }
}