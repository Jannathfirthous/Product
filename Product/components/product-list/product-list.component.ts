import { Component } from '@angular/core';
import { Product } from 'model/product';
import { ProductServiceService } from 'src/app/product-service.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products:Product[]=[];

  constructor(private productservice: ProductServiceService) {
  }

  ngOnInit() {
    this.productservice.findAll().subscribe(data => {
      this.products = data;
    });
  }

}
