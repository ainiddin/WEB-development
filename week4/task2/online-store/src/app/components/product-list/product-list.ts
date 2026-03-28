import { Component, input, output } from '@angular/core';
import {CommonModule} from '@angular/common';
import {Product} from '../../models/product.model';
import {ProductItem} from '../product-item/product-item';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule,ProductItem],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
  standalone: true,
})
export class ProductList {
  products = input.required<Product[]>();
  like = output<number>();
  delete = output<number>();

  onLike ( id : number ) : void {
    this.like.emit( id );
  }

  onDelete ( id : number ) : void {
    this.delete.emit( id );
  }
}
