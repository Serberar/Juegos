import { Component } from '@angular/core';

@Component({
  selector: 'app-game3',
  templateUrl: './game3.component.html',
  styleUrls: ['./game3.component.css']
})
export class Game3Component {

  filas: any = 0;
  columnas: any = 0;
  arrayFilasColumnas: any[][] = [];
  aleatorio: number = 0;
  encontrado: boolean = false;
  imagen: string = './assets/img/game3/x.png';
  mostrarImagen: boolean = false;
  intentos: number=0;

  empezar() {
    this.numeroFilas();
    this.numeroColumnas();
    this.matriz();
    this.random();
  }

  numeroFilas() {
    this.filas = prompt("Introduce el numero de filas");
    console.log(this.filas);
  }

  numeroColumnas() {
    this.columnas = prompt("Introduce el numero de columnas");
    console.log(this.columnas);
  }

  matriz() {
    this.arrayFilasColumnas = new Array(this.filas);
    for (let i = 0; i < this.filas; i++) {
      this.arrayFilasColumnas[i] = new Array(this.columnas);
      for (let j = 0; j < this.columnas; j++) {
        this.arrayFilasColumnas[i][j] = { id: i * this.columnas + j, volteado: false };
      }
    }
  }

  random() {
    this.aleatorio = Math.floor(Math.random() * (this.filas * this.columnas));
  }

  comprobar(carta: any): void {
    if (!carta.volteado) {
      carta.volteado = true;
      this.intentos++;
  
      if (carta.id === this.aleatorio) {
        carta.correcta = true;
        this.encontrado = true;
        alert('Felicidades entontraste el tesoro')
      } else {
        carta.correcta = false;
        this.imagen = './assets/img/game3/x.png';
      }
    }
  }
  
  mostrar() {
    if (this.encontrado) {
      this.imagen = './assets/img/game3/chest.png';
    } else {
      this.imagen = './assets/img/game3/skull.png';
    }
    this.mostrarImagen = false;
  }

  reiniciar(){
    location.reload();
   }

}
