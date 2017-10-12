import { Component, OnInit } from '@angular/core';
import { Coche }             from './model_product';
import { PeticionesService } from '../services/peticiones.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [PeticionesService]
})
export class ProductsComponent implements OnInit {

    public coche: Coche;
    public coches:Array<Coche>;
    public items;

    constructor(
      private _peticionesService: PeticionesService
      ) {
        this.coche = new Coche("", "", "");
        this.coches = [
          new Coche("Bocho"    , "120", "blanco"),
          new Coche("camioneta", "240", "negra"),
          new Coche("suru"     , "110", "rojo")
        ];
    }

  ngOnInit() {

    this._peticionesService.getItems().subscribe(
      result => {
        this.items = result;
        if(!this.items){
          console.log('error al recueprar los datos');
        }
      },
      error => {
        var errorMensaje = <any>error;
        console.log(errorMensaje);
      }
    );
  }

  onSubmit(){

    this.coches.push(this.coche);
    this.coche = new Coche("", "", "");
    console.log(this.coche);
  }

  eliminarItem(id_producto){
    this._peticionesService.deleteItem(id_producto).subscribe(
      result => {
        alert('Eliminacion correcta.');
      },
      error => {
        var errorMensaje = <any>error;
        console.log(errorMensaje);
      },
      () => {// transaccion compĺetada
        this._peticionesService.getItems().subscribe(
          result => {
            this.items = result;
            if(!this.items){
              console.log('error al recueprar los datos');
            }
          },
          error => {
            var errorMensaje = <any>error;
            console.log(errorMensaje);
          }
        );
        }// transaccion compĺetada
    );
  }

}
