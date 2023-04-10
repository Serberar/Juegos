import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceComponent } from './shared/service/service.component';
import { HeaderComponent } from './pages/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { Game1Component } from './pages/game1/game1.component';
import { Game2Component } from './pages/game2/game2.component';
import { Game3Component } from './pages/game3/game3.component';
//importo el componente Routes
import { RoutesComponent } from './shared/routes/routes.component';
//importo el modulo HttpClient
import { HttpClientModule } from '@angular/common/http';
//importo la variable Routes
import { routes } from './shared/routes/routes.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    RoutesComponent,
    HomeComponent,
    Game1Component,
    Game2Component,
    Game3Component,
    HeaderComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //importo el modulo router y le asigno la variable routes
    RouterModule.forRoot(routes),
    //importo el modulo HttpClient
    HttpClientModule,
    //importo formsModule
    FormsModule

    
    
  ],
  providers: [ServiceComponent],
  bootstrap: [AppComponent]
})
export class AppModule { } 
