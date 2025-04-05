import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Circulo } from '../../models/circulo';

@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CirculoComponent {
  radio: number = 0;
  perimetro: number | null = null;

  calcularPerimetro() {
    if (this.radio > 0) {
      const circulo = new Circulo(this.radio);
      this.perimetro = circulo.calcularPerimetro();
    } else {
      this.perimetro = null;
    }
  }
}
