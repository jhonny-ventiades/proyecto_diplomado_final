import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../model/product.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor (private http: HttpClient) {}

  private products: Product[] = [
    {id: 1, name: 'Product 1', price: 100},
    {id: 2, name: 'Product 2', price: 200},
    {id: 3, name: 'Product 3', price: 300},
  ];

  saveProduct(product: Product): Observable<Product> {
    //TODO guardar en BD
    //this.http.post<Product>('http://localhost:3000/products', product).subscribe();
    this.products.push(product);
    return of(product); //todo: que devuelva el valor guardado
  }

  getProductsFromServer(httpClient: HttpClient): Observable<Product[]> {
    return httpClient.get<Product[]>('http://localhost:3000/products');
  }

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getProductById(id: number): Observable<Product | undefined> {
    return of(this.products.find(product => product.id === id));
  }

  updateProduct(product: Product): Observable<Product> {
    //TODO actualizar en BD
    return of(product); //todo: que devuelva el valor actualizado
  }

  deleteProduct(id: number): Observable<boolean> {
    //TODO eliminar en BD
    return of(true); //todo: que devuelva el valor eliminado
  }
}
