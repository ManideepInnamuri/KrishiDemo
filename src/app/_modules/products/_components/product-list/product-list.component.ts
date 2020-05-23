import { ProductService } from 'src/app/_core/_services/product.service';
import { Product } from '../../../../_shared/_models/Product';
import { Component, OnInit } from '@angular/core';
import { AlertifyService } from 'src/app/_core/_services/alertify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];
  constructor(
    private productService: ProductService,
    private alertify: AlertifyService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.products = data.products;
      console.log(this.products);
    });
  }
}
