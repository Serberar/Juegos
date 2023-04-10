import { Component } from '@angular/core';
import { ServiceComponent } from '../../shared/service/service.component';

interface Valores {
  [key: string]: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  datos: Valores = {};
  monedas: string[] = [];
  monedaSeleccionada: string = 'EUR';
  numero: number = 1;


  constructor(private serviceComponent: ServiceComponent) {}

  ngOnInit() {
    this.serviceComponent.getdata().subscribe((data: any) => {
      this.datos = data.rates;
      this.monedas = Object.keys(this.datos);
      this.actualizarValor();
    });
  }

  actualizarValor() {
    if (this.numero < 1) {
      this.numero = 1;
    }
    const tasa = this.datos[this.monedaSeleccionada];
    for (const moneda in this.datos) {
      this.datos[moneda] = this.numero * (this.datos[moneda] / tasa);
    }
  }

  actualizarSeleccion(clave: string) {
    this.monedaSeleccionada = clave;
  }

}