import { Component } from '@angular/core';
import { ProductCardComponent } from "../product-card/product-card.component";
import { Product } from '../../model/product.model';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  imports: [RouterModule, CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  product: Product | undefined;
  
  constructor(private router: Router, private activeroute: ActivatedRoute, private productService: ProductService) {
    // Get product details from API
    const id = Number(this.activeroute.snapshot.paramMap.get('id'));
    this.productService.getProductById(id)
      .subscribe(product => this.product = product);
  }

  goToList() {
    // Navigate to product list
    //this.router.navigate(['']);
    window.history.back();
  }
}
