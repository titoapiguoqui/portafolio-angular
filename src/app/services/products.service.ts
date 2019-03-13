import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: Product[] = [];
  load = true;
  productsFiltered: Product[] = [];

  constructor( private http: HttpClient) {
    this.loadProducts();
  }

  private loadProducts() {
    return new Promise( (resolve, reject) => {
      this.http.get('https://angular-html-efe8c.firebaseio.com/products_idx.json')
        .subscribe( (resp: Product[]) => {
          this.products = resp;
          this.load = false;
          resolve();

          /* SHOW LOAD AFTER TIMEOUT
          setTimeout(() => {
            this.load = false;
          }, 2000);
          */

          // console.log(resp);
        });
    });
  }

  getProduct( id: string) {
    return this.http.get( `https://angular-html-efe8c.firebaseio.com/products/${ id }.json` );
  }

  searchProduct( term: string ) {
    if ( this.products.length === 0 ) {
      // Load products
      this.loadProducts().then( () => {
        // Run after get the products
        // Filter
        this.filterProducts( term );
      });
    } else {
      // Filter
      this.filterProducts( term );
    }
  }

  private filterProducts( term: string ) {
    this.productsFiltered = [];

    term = term.toLocaleLowerCase();

    this.products.forEach( prod => {
      const titleLower = prod.titulo.toLocaleLowerCase();
      if ( prod.categoria.indexOf(term) >= 0 || titleLower.indexOf(term) >= 0 ) {
        this.productsFiltered.push(prod);
      }
    });
  }
}
