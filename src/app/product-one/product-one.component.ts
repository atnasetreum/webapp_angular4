import { Component, OnInit }             from '@angular/core';
import { PeticionesService }             from '../services/peticiones.service';
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-product-one',
  templateUrl: './product-one.component.html',
  styleUrls: ['./product-one.component.css'],
  providers: [PeticionesService]
})
export class ProductOneComponent implements OnInit {
    public items_one;
    public id_producto;
  constructor(
    private _peticionesService: PeticionesService,
    private _route: ActivatedRoute,
    private _router: Router
    ) {
    this.items_one = new Object();
  }

  ngOnInit() {

    this._route.params.forEach( (params: Params) => {
        this.id_producto = params['id'];
    });

    this._peticionesService.getItem(this.id_producto).subscribe(
      result => {
        this.items_one = result;
        if(!this.items_one){
          console.log('error al recueprar los datos');
        }
      },
      error => {
        var errorMensaje = <any>error;
        console.log(errorMensaje);
      }
    );

  }

}
