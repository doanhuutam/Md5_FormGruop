import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../model/product";
import {FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input()
  products: Product[] = [];
  formProduct: FormGroup = new FormGroup({});

  constructor() {

  }

  ngOnInit(): void {
    this.formProduct = new FormGroup({
      name: new FormControl('', Validators.required),
      //validation name khoong de trong
      price: new FormControl('', Validators.min(9)),
      //validation name gia tri nho nhat la 9
      img: new FormControl('', Validators.required),
      //validation name khoong de trong
      trangthai: new FormControl('',Validators.required)
    });

  }

  @Output() deletePr = new EventEmitter();

  delete(index: number) {
    // for (let i = 0; i < this.products.length; i++) {
    //   if (this.products[i].name === name) {
    //     this.deletePr.emit(i)
    //     return;
    //   }
    // }
    this.deletePr.emit(index);
  }

  @Output() createPr = new EventEmitter();

  create() {
    // @ts-ignore
    // let a = new Product(this.name, this.price, this.img, this.checkStatus())
    // this.createPr.emit(a);
    // this.name = "";
    // this.price = 0;
    // this.img = "";
    this.createPr.emit(this.formProduct?.value);
    this.formProduct.reset();

  }

  show(name: string) {
    // for (let i = 0; i < this.products.length; i++) {
    //   if (this.products[i].name === name) {
    //     this.name = this.products[i].name;
    //     this.img = this.products[i].img;
    //     this.price = this.products[i].price;
    //     return;
    //   }
    // }
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].name === name) {
        this.formProduct?.get('name')?.setValue(this.products[i].name);
        this.formProduct?.get('price')?.setValue(this.products[i].price);
        this.formProduct?.get('img')?.setValue(this.products[i].img);
        this.formProduct?.get('trangthai')?.setValue(this.products[i].trangthai);
      }
    }
  }

  @Output() editPr = new EventEmitter();

  edit() {
    // @ts-ignore
    // let a = new Product(this.name, this.price, this.img, this.checkStatus())
    // this.editPr.emit(a)
    this.editPr.emit(this.formProduct?.value);
    this.formProduct.reset();


  }

  checkStatus() {
    // @ts-ignore
    if (this.formProduct?.get('trangthai') === 'true') {
      return true;
    } else {
      return false;
    }
  }

}

