import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from './producto';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private urlBase = "http://localhost:9091/inventario-app/productos";

  constructor(private httpClient: HttpClient) { }

  obtenerProductosLista(): Observable<Producto[]> {
    return this.httpClient.get<Producto[]>(this.urlBase); 
  }

  agregarProducto(producto:Producto):Observable<Object>{
    return this.httpClient.post(this.urlBase, producto);
  }

  obtenerProducto(id:number){
    return this.httpClient.get<Producto>(`${this.urlBase}/${id}`);
  }

  editarProducto(id:number, producto:Producto):Observable<Object>{
    return this.httpClient.put(`${this.urlBase}/${id}`, producto);
  }

  eliminarProducto(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.urlBase}/${id}`)
  }
}
