import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../model/product";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input()
  products: Product[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
