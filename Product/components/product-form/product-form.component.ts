import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServiceService } from 'src/app/product-service.service';
import { Product } from 'model/product';
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
// @NgModule({
//   declarations: [
//     AppComponent
//   ],
//   imports: [
//     BrowserModule, FormsModule // <<<< And here
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
export class ProductFormComponent {
  product: Product;

  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private productservice: ProductServiceService) {
    this.product = new Product();
  }

  onSubmit() {
    this.productservice.save(this.product).subscribe(result => this.gotoProductList());
  }

  gotoProductList() {
    this.router.navigate(['/products']);
  }
}

