import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../model/product.model';

@Component({
  standalone: true,
  selector: 'app-product-card',
  template: `<div class="card" style="background-color: blueviolet;">
    <h3>{{product.name}}</h3>
    <p>{{product.price}}</p>
    <button (click)="selectProduct()">{{text_boton}}</button>
  </div>`,
  styles: [`.card {
    border: 1px solid #000000;
    padding: 10px;
    margin: 10px;
  
  }
  button {
    background-color: #000000;
    color: #ffffff;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
  }`]
})
export class ProductCardComponent {
  @Input() text_boton: string = 'Ver detalles';
  @Input() product: Product = {
    id: 0,
    name: '',
    price: 0
  };
  @Output() productSelected: EventEmitter<Product> = new EventEmitter<Product>();

  selectProduct() {
    this.productSelected.emit(this.product);
  }
}
