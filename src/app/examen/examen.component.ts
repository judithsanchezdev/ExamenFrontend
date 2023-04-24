import { Component } from '@angular/core';
import { ExamenService } from '../service/examen.service';
import { HttpClient } from '@angular/common/http';
import { IExamen } from '../interfaces/examen';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-examen',
  templateUrl: './examen.component.html',
  styleUrls: ['./examen.component.css']
})
export class ExamenComponent {

  formExamen!: UntypedFormGroup;

  constructor(private http: HttpClient, private examenService: ExamenService, private formBuilder: UntypedFormBuilder) { }

  ngOnInit(): void {

    this.formExamen = this.formBuilder.group({
      idExamen: ['', { validators: [Validators.required] }],
      codigo: ['', { validators: [Validators.required] }],
      nombre: ['', { validators: [Validators.required] }],
      descripcion: [''],
      activo: [1],
    });

  }

  consultarExamen(){
    this.examenService.consultaExamen().subscribe((data: any) => {
      console.log(data, "response")
    });
  }

  agregarExamen() {
    const datos  =  this.formExamen.value
    this.examenService.agregarExamen(datos).subscribe((data: any) =>   {
      console.log(data, "response")
    });
  }

  actualizarExamen() {
    const datos  =  this.formExamen.value
    this.examenService.actualizarExamen(datos).subscribe((data: any) =>   {
      console.log(data, "response")
    });
  }

  eliminarExamen() {
    const datos  =  this.formExamen.value
    this.examenService.eliminarExamen(datos).subscribe((data: any) =>   {
      console.log(data, "response")
    });
  }

}
