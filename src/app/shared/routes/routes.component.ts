import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Game1Component } from 'src/app/pages/game1/game1.component';
import { Game2Component } from 'src/app/pages/game2/game2.component';
import { Game3Component } from 'src/app/pages/game3/game3.component';
import { HomeComponent } from 'src/app/pages/home/home.component';

//aqui la variable de las rutas
export const routes: Routes =[
  {path:'',component:HomeComponent},
  {path:'game1',component:Game1Component},
  {path:'game2',component:Game2Component},
  {path:'game3',component:Game3Component},
]

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.css']
})
export class RoutesComponent {

}
