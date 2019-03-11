import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { ProductDetails } from '../../interfaces/product-details.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor( private route: ActivatedRoute, public productService: ProductsService ) { }

  ngOnInit() {
    this.route.params
        .subscribe( params => {
          this.productService.getProduct(params.id)
              .subscribe ( (product: ProductDetails) => {
                console.log(product);
              });

          // console.log(params.id);
        });
  }

}
