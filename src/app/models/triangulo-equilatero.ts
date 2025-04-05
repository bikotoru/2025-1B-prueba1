import { TrianguloEscaleno } from './triangulo-escaleno';

export class TrianguloEquilatero extends TrianguloEscaleno {
  constructor(ladoA: number) {
    super(ladoA, ladoA, ladoA);
  }
}