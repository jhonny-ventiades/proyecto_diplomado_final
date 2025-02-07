import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Product } from '../../model/product.model';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent, CommonModule, RouterModule],
  templateUrl: './product-list.component.html',
  styles: [`.product-list {display: flex; gap:10; flex-wrap: wrap; justify-content: space-around;}`]
})
export class ProductListComponent {
  list: Product[] = [];
  title = 'Bienvenido a mi tienda..';

  constructor(private productService: ProductService, private router: Router){
    productService.getProducts()
    .subscribe(products => this.list = products);
  }

  goToDetail(product: Product) {
    console.log('Go to detail', product);
    this.router.navigate(['/product', product.id]);
  }
}
