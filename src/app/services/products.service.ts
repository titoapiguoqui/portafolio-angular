import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: Product[] = [];
  load = true;

  constructor( private http: HttpClient) {
    this.loadProducts();
  }

  private loadProducts() {
    this.http.get('https://angular-html-efe8c.firebaseio.com/products_idx.json')
        .subscribe( (resp: Product[]) => {
          this.products = resp;
          this.load = false;

          /* SHOW LOAD AFTER TIMEOUT
          setTimeout(() => {
            this.load = false;
          }, 2000);
          */

          // console.log(resp);
        });
  }
}
