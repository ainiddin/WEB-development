import { Component, input, output, signal, OnInit} from '@angular/core';
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
  product = input.required<Product>();
  like = output<number>();
  delete = output<number>();

  currentRating = signal(0);

  ngOnInit() {
    this.currentRating.set(this.product().rating);
  }

  onRatingChange(newRating : number) {
    this.currentRating.set(newRating);
  }
  onLikeClick(){
    this.like.emit(this.product().id);
  }
  onDeleteClick(){
    this.delete.emit(this.product().id);
  }

  shareOnWhatsApp(link: string){
    const encodeMessage = encodeURIComponent('Check out this product' + link);
    const url = 'https://web.whatsapp.com/' + encodeMessage;
    window.open(url);//if write window.open(url,'_blank'); то откроется новая вкладка, а без него ссылка откроется как захочет браузер
  }

  shareOnTelegram(link: string){
    const encodeMessage = encodeURIComponent('Check out this product' + link);
    const url = 'https://web.telegram.org/' + encodeMessage;
    window.open(url);
  }
  getAllImages (p: Product): string[] {
    return [...p.images];
  }
  selectedImageIndex: Record<number, number> = {};

  getIndex(productId: number): number {
    return this.selectedImageIndex[productId] ?? 0;
  }

  setIndex(productId: number, index: number): void {
    this.selectedImageIndex[productId] = index;
  }

  protected openLink(link: string) {
    window.open(link);
  }
}
