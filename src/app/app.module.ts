import { BrowserModule }from '@angular/platform-browser';
import { NgModule }     from '@angular/core';
import { FormsModule }  from '@angular/forms';
import { routing, appRoutingProviders }from './app.routing';
import { HttpModule }   from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsComponent } from './products/products.component';
import { IndexComponent } from './index/index.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { TruncateModule } from 'ng2-truncate';
import { ProductOneComponent } from './product-one/product-one.component';
import { NuevomensajeComponent } from './nuevomensaje/nuevomensaje.component';
import { UpdatemensajeComponent } from './updatemensaje/updatemensaje.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductsComponent,
    IndexComponent,
    NotfoundComponent,
    ProductOneComponent,
    NuevomensajeComponent,
    UpdatemensajeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule,
    TruncateModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
