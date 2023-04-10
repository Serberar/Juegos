import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ServiceComponent {

  BBDD = 'https://api.vatcomply.com/rates';

  constructor(private http: HttpClient) {}

  getdata() {
    return this.http.get(this.BBDD);
  }
}
