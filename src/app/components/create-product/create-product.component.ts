import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-product',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css'
})
export class CreateProductComponent {
  productForm = new FormGroup({
    name: new FormControl('', Validators.required),
    price: new FormControl('', [Validators.required, Validators.min(1)])
  });

  constructor (private productService: ProductService, private router: Router) {
    console.log('CreateProductComponent');
  }

  onSubmit(form: FormGroup) {
    console.log(form.value, this.productForm.value);
    if (this.productForm.valid) {
      let product = form.value;
      product.id = 10;
      this.productService.saveProduct(product)
      .subscribe(product => {
        console.log('Product created', product);
        this.router.navigate(['/']);
      });
    } else {
      alert('Formulario inválido');
    }
  }
}
