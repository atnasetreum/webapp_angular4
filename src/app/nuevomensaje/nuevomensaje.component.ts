import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { mensajeObj } from './mensaje';
import { PeticionesService } from '../services/peticiones.service';

@Component({
  selector: 'app-nuevomensaje',
  templateUrl: './nuevomensaje.component.html',
  styleUrls: ['./nuevomensaje.component.css'],
  providers: [PeticionesService]
})
export class NuevomensajeComponent implements OnInit {

    public mensaje: mensajeObj;

    constructor( private _peticionesService: PeticionesService, private router: Router ) {
        this.mensaje = new mensajeObj('', '');
    }

    ngOnInit() {
    }

    guardarMensaje(){
        this._peticionesService.createItem(this.mensaje).subscribe(
          result => {
            alert('recurso creado');
            this.router.navigate(['/todos-los-mensajes']);
          },
          error => {
            var errorMensaje = <any>error;
            console.log(errorMensaje);
          }
        );
    }

}
