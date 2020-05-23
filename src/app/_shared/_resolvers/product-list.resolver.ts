import { Product } from '../_models/Product';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { AlertifyService } from '../../_core/_services/alertify.service';
import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { ProductService } from 'src/app/_core/_services/product.service';

@Injectable()
export class ProductListResolver implements Resolve<Product[]> {
  constructor(
    private productService: ProductService,
    private router: Router,
    private alertify: AlertifyService
  ) {}
  resolve(route: ActivatedRouteSnapshot): Observable<Product[]> {
    return this.productService.getProducts().pipe(
      catchError((error) => {
        this.alertify.error('Problem Retrieving data');
        this.router.navigate(['/intro']);
        return of(null);
      })
    );
  }
}
