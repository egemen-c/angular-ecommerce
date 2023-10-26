import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../product/product.component';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent {
  products: Product[] = [];
  limit: number = 8;
  constructor(private productService: ProductService) {}
  ngOnInit() {
    this.productService.getProductsWithLimit(this.limit).subscribe(response => {
      this.products = response;

      console.log(this.products);
    })
  }
}
