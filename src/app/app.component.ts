import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { CreateProductComponent } from "./components/create-product/create-product.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, CreateProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private router: Router) {

  }

  goToCreateProduct() {
    console.log('Go to create product');
    this.router.navigate(['product/add']);
  }
}
