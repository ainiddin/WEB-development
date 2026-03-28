import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductList } from './components/product-list/product-list';
import { Product } from './models/product.model';
import { ProductsData} from './data/products';
import { CategoriesData } from './data/categories';
import { Category } from './models/category.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('online-store');
  products: Product[] = ProductsData;
  categories: Category[] = CategoriesData;

  selectedCategoryId: number | null = null; //Знак | здесь это объединение типов (Union Type) в TypeScript

  selectCategory (id : number): void{
    this.selectedCategoryId = id;
  }

  filteredProducts () : Product[] {
    if (this.selectedCategoryId === null){
      return [];
    }//if you don't have chosen category return null
    return this.products.filter((p: Product) =>
       p.categoryId === this.selectedCategoryId
    );//if you have any category filter array by filter()
  }

  handleLike (id: number) : void {
    const item = this.products.find(p=> p.id === id);
    if(item){
      item.likes = item.likes + 1;
    }
  }

  handleDelete(id : number) : void {
    this.products = this.products.filter(p => p.id !== id);
  }
}
