import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TrianguloEscaleno } from '../../models/triangulo-escaleno';

@Component({
  selector: 'app-triangulo',
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class TrianguloComponent {
  ladoA: number = 0;
  ladoB: number = 0;
  ladoC: number = 0;
  perimetro: number | null = null;

  // Verifica si los lados pueden formar un triángulo
  esTrianguloValido(): boolean {
    return (
      this.ladoA > 0 &&
      this.ladoB > 0 &&
      this.ladoC > 0 &&
      this.ladoA + this.ladoB > this.ladoC &&
      this.ladoA + this.ladoC > this.ladoB &&
      this.ladoB + this.ladoC > this.ladoA
    );
  }

  calcularPerimetro() {
    if (this.esTrianguloValido()) {
      const triangulo = new TrianguloEscaleno(this.ladoA, this.ladoB, this.ladoC);
      this.perimetro = triangulo.calcularPerimetro();
    } else {
      this.perimetro = null;
    }
  }
}
