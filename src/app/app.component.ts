import {Component} from '@angular/core';
import {Product} from "./model/product";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BaitapDemo';
  product: Product[] = [];

  constructor() {
    this.product.push(new Product("pet", 112, "https://i.pinimg.com/originals/c6/dc/8c/c6dc8c2764bf1a42b11e97eb095a9593.png","true"));
  }

  delete(index: number) {

    this.product.splice(index, 1);
  }
  create(product :Product) {
    this.product.push(product);

  }
  // edit( product:Product){
  //
  // }
  edit(product:Product){
    for (let i=0;i<this.product.length;i++){
      if (this.product[i].name==product.name){
        this.product[i]=product;
      }
    }
  }

}
