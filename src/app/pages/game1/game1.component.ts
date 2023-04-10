import { Component } from '@angular/core';

@Component({
  selector: 'app-game1',
  templateUrl: './game1.component.html',
  styleUrls: ['./game1.component.css']
})
export class Game1Component {
  cards = [
    {
      id: 1,
      name: "earth",
      img: "assets/img/game1/earth.svg",
      seleccionada: false,
      acertada: false
    },
    {
      id: 2,
      name: "jupiter",
      img: "assets/img/game1/jupiter.svg",
      seleccionada: false,
      acertada: false
    },
    {
      id: 3,
      name: "mars",
      img: "assets/img/game1/mars.svg",
      seleccionada: false,
      acertada: false
    },
    {
      id: 4,
      name: "mercury",
      img: "assets/img/game1/mercury.svg",
      seleccionada: false,
      acertada: false
    },
    {
      id: 5,
      name: "saturn",
      img: "assets/img/game1/saturn.svg",
      seleccionada: false,
      acertada: false
    },
    {
      id: 6,
      name: "uranus",
      img: "assets/img/game1/uranus.svg",
      seleccionada: false,
      acertada: false
    },
    {
      id: 7,
      name: "earth",
      img: "assets/img/game1/earth.svg",
      seleccionada: false,
      acertada: false
    },
    {
      id: 8,
      name: "jupiter",
      img: "assets/img/game1/jupiter.svg",
      seleccionada: false,
      acertada: false
    },
    {
      id: 9,
      name: "mars",
      img: "assets/img/game1/mars.svg",
      seleccionada: false,
      acertada: false
    },
    {
      id: 10,
      name: "mercury",
      img: "assets/img/game1/mercury.svg",
      seleccionada: false,
      acertada: false
    },
    {
      id: 11,
      name: "saturn",
      img: "assets/img/game1/saturn.svg",
      seleccionada: false,
      acertada: false
    },
    {
      id: 12,
      name: "uranus",
      img: "assets/img/game1/uranus.svg",
      seleccionada: false,
      acertada: false
    },
  ];
  //barajo las cartas
  constructor() {
    this.cards.sort(() => 0.5 - Math.random());
  }
  //array para guardas las seleccionadas
  seleccionadas: any[] = [];
  // array para cuardar los iguales
  iguales: any[] = [];
  //si click en la carta doy la vuelta a la imagen
  vuelta(card: any) {
    card.seleccionada = !card.seleccionada;
    //meto la carta seleccionada en el array seleccionadas
    if (card.seleccionada) {
      this.seleccionadas.push(card);
    }
    //si la deselecciono la quito del array
    else {
      const index = this.seleccionadas.indexOf(card);
      if (index > -1) {
        this.seleccionadas.splice(index, 1);
      }
    }

    //miro si son iguales
    if (this.seleccionadas[0].name === this.seleccionadas[1].name) {
      this.seleccionadas.forEach((card: any) => {
        card.acertada = true; // cambia la propiedad acertada a true
        card.seleccionada = false; // cambia la propiedad seleccionada a false
        this.iguales.push(card);
      });
    }
    //le pongo un temporizador para que de la vuelta su no esta en el array
    setTimeout(() => {

      this.seleccionadas.forEach((card: any) => {
        if (!this.iguales.includes(card)) {
          card.seleccionada = false;
        }
      });
      // reset al array seleccionadas
      this.seleccionadas = [];
    }, 1000);

  }

  reiniciar(){
    location.reload();
   }

}
