

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IExamen } from '../interfaces/examen';

@Injectable({
  providedIn: 'root'
})
export class ExamenService {
  private apiURL = environment.apiURL;

  constructor(private http: HttpClient) { }

  consultaExamen() {
    return this.http.get(`${this.apiURL}/examen`)
  }

  agregarExamen(data: IExamen) {
    return this.http.post(`${this.apiURL}/examen`, data)
  }

  actualizarExamen(data: IExamen) {
    return this.http.put(`${this.apiURL}/examen`, data)
  }

  eliminarExamen(data: IExamen) {
    return this.http.put(`${this.apiURL}/examen`, data)
  }

}
