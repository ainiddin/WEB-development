import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css'
})
export class ProductItem {
  @Input() product!: Product;
  currentImageIndex = 0;

  get currentImage(): string {
    return this.product.images[this.currentImageIndex];
  }

  changeImage(index: number) {
    this.currentImageIndex = index;
  }

  share() {
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent('Купи мне это: ' + this.product.link)}`;
    window.open(whatsappUrl, '_blank');
  }
}
