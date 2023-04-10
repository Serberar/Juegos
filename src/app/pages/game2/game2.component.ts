import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-game2',
  templateUrl: './game2.component.html',
  styleUrls: ['./game2.component.css']
})
export class Game2Component {

  elementos = [
    { id: 1, class: 'b-square' },
    { id: 2, class: 'b-square' },
    { id: 3, class: 'b-square' },
    { id: 4, class: 'b-square' },
    { id: 5, class: 'b-square' },
    { id: 6, class: 'b-square' },
    { id: 7, class: 'b-square' },
    { id: 8, class: 'b-square' },
    { id: 9, class: 'b-square' }
  ];

  temporizador:number=0;
  tiempoRestante:number=0;
  puntuacion:number = 0;
  intervalo:any;
  aleatorio = this.random()
  segundos:number = 30;
  

  empezar (){
    this.repetir()
    this.tiempo()
  }

  repetir() {
    this.intervalo = setInterval(() => {
      this.aleatorio = this.random();
      console.log(this.aleatorio);
    }, 500) ;
  }
  
  random() {
    return Math.floor(Math.random() * 9) + 1;
  }

tiempo(){
  this.temporizador= setInterval(() => {
    this.segundos--;
    this.tiempoRestante = this.segundos;
    if (this.segundos === 0) {
      clearInterval(this.temporizador);
      clearInterval(this.intervalo)
      alert('Se acabo el tiempo. Tu puntuación ha sido:' + this.puntuacion);
    }
  }, 1000);
}
  
  puntos() {
    this.puntuacion++;
    console.log(this.puntuacion);
    
  }

  OnChanges(changes: SimpleChanges) {
    if (changes['puntuacion']) {
      this.puntos = changes['puntuacion'].currentValue;
    }
  }

 reiniciar(){
  location.reload();
 } 
 
}



