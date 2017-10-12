import { Injectable }              from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod  } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable }              from 'rxjs/Observable';


@Injectable()
export class PeticionesService {

    constructor(private _http:Http){
    }

    getItems(){
        return this._http.get('https://jsonplaceholder.typicode.com/posts').map(res => res.json());
    }
    getItem(id_producto){
        return this._http.get('https://jsonplaceholder.typicode.com/posts/'+id_producto).map(res => res.json());
    }
    createItem(mensaje){
        return this._http.post('https://jsonplaceholder.typicode.com/posts/',{data:mensaje }).map(res => res.json());
    }
    updateItem(mensaje, id_producto){
        return this._http.put('https://jsonplaceholder.typicode.com/posts/'+id_producto, {data:mensaje }).map(res => res.json());
    }
    deleteItem(id_producto){
        return this._http.delete('http://jsonplaceholder.typicode.com/posts/'+id_producto).map(res => res.json());
    }

}