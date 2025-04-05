import { FiguraGeometrica } from './figura-geometrica';

export class Circulo extends FiguraGeometrica {
  private radio: number;

  constructor(radio: number) {
    super('Círculo');
    this.radio = radio;
  }

  calcularPerimetro(): number {
    return 2 * Math.PI * this.radio;
  }
}