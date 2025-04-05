import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CirculoComponent } from '../components/circulo/circulo.component';
import { TrianguloComponent } from '../components/triangulo/triangulo.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CirculoComponent, TrianguloComponent, CommonModule, FormsModule],
})
export class HomePage {
  figuraSeleccionada: string = '';

  constructor() {}
}