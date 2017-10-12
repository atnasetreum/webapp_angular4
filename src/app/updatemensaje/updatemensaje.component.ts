import { Component, OnInit } from '@angular/core';
import { mensajeObj } from './mensaje';
import { PeticionesService }             from '../services/peticiones.service';
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-updatemensaje',
  templateUrl: './updatemensaje.component.html',
  styleUrls: ['./updatemensaje.component.css'],
  providers: [PeticionesService]
})
export class UpdatemensajeComponent implements OnInit {

  public mensaje: mensajeObj;
  private id_producto;

    constructor( private _peticionesService: PeticionesService,
    private _route: ActivatedRoute,
    private _router: Router) {
      this.mensaje = new mensajeObj('', '');
    }

    ngOnInit() {
        this._route.params.forEach( (params: Params) => {
            this.id_producto = params['id'];
        });

        this._peticionesService.getItem(this.id_producto).subscribe(
          result => {
            this.mensaje = new mensajeObj(result.title, result.body);
          },
          error => {
            var errorMensaje = <any>error;
            console.log(errorMensaje);
          }
        );

      }

      guardarMensaje(){
        this._peticionesService.updateItem(this.mensaje, this.id_producto).subscribe(
          result => {
            alert('recurso actualizado');
            this._router.navigate(['/todos-los-mensajes']);
          },
          error => {
            var errorMensaje = <any>error;
            console.log(errorMensaje);
          }
        );
    }

}
