import { ModuleWithProviders }  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// importar componentes
import { NotfoundComponent }   from './notfound/notfound.component';
import { IndexComponent }      from './index/index.component';
import { ProductsComponent }   from './products/products.component';
import { ProductOneComponent } from './product-one/product-one.component';
import { NuevomensajeComponent } from './nuevomensaje/nuevomensaje.component';
import { UpdatemensajeComponent } from './updatemensaje/updatemensaje.component';



const appRoutes: Routes = [
  { path: ''                        , component: IndexComponent },
  { path: 'todos-los-mensajes'      , component: ProductsComponent},
  { path: 'detalles_del_mensaje/:id', component: ProductOneComponent},
  { path: 'crear_nuevo_mensaje'     , component: NuevomensajeComponent},
  { path: 'actualizar_mensaje/:id'  , component: UpdatemensajeComponent},
  { path: '**'                      , component: NotfoundComponent },
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
