import { Component } from '@angular/core';
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
products: Product[] = [
    {
      id: 1,
      name: 'Мышь AULA SC580 красный',
      description: 'Смело кликай и играй в CS2',
      price: 11900,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h6e/he7/84872253014046.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h6e/he7/84872253014046.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h6e/he7/84872253014046.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h6e/he7/84872253014046.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/aula-sc580-krasnyi-115847302/'
    },
    {
      id: 2,
      name: 'Клавиатура AULA S75 Pro черный',
      description: 'Смело тайпи и играй в CS2',
      price: 24779,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pc4/p05/67516637.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pc4/p05/67516637.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pc4/p05/67516637.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pc4/p05/67516637.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/aula-s75-pro-chernyi-146496564/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7imEUCwwPcMlyyqDq-6uRFZ1&gclid=Cj0KCQiAtfXMBhDzARIsAJ0jp3B95kKwt3XXUTFoNoHLIuIeYlwaLN7pgcczA8GPWhZZFAFlvWCjhMYaAr_9EALw_wcB'
    },
    {
      id: 3,
      name: 'Наушники AULA G7 белый',
      description: 'смело общяйся и играй в CS2',
      price: 11614,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p9f/p39/57202752.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p9f/p39/57202752.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p9f/p39/57202752.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p9f/p39/57202752.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-aula-g7-belyi-143693130/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7imEUCwwPcMlyyqDq-6uRFZ1&gclid=Cj0KCQiAtfXMBhDzARIsAJ0jp3B95kKwt3XXUTFoNoHLIuIeYlwaLN7pgcczA8GPWhZZFAFlvWCjhMYaAr_9EALw_wcB'
    },
    {
      id: 4,
      name: 'Коврик для мыши HyperX Pulsefire Mat Large 450x400x4 мм черный',
      description: 'подставляй под мышку и играй в CS2',
      price: 10990,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h25/h55/64379915960350.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h25/h55/64379915960350.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h25/h55/64379915960350.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h25/h55/64379915960350.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/hyperx-pulsefire-mat-large-450x400x4-mm-chernyi-104420769/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7imEUCwwPcMlyyqDq-6uRFZ1&gclid=Cj0KCQiAtfXMBhDzARIsAJ0jp3B95kKwt3XXUTFoNoHLIuIeYlwaLN7pgcczA8GPWhZZFAFlvWCjhMYaAr_9EALw_wcB'
    },
    {
      id: 5,
      name: 'Ноутбук Lenovo LOQ 83DV01CLRK 15IRX9 15.6" / 16 Гб / SSD 1000 Гб / Без ОС / 83DV01CLRK',
      description: 'Купи этот бешенный ноут и играй CS2 дни на пролет',
      price: 549989,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p17/p3c/99725537.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p17/p3c/99725537.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p17/p3c/99725537.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p17/p3c/99725537.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/lenovo-loq-83dv01clrk-15irx9-15-6-16-gb-ssd-1000-gb-bez-os-83dv01clrk-155610101/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7imEUCwwPcMlyyqDq-6uRFZ1&gclid=Cj0KCQiAtfXMBhDzARIsAJ0jp3B95kKwt3XXUTFoNoHLIuIeYlwaLN7pgcczA8GPWhZZFAFlvWCjhMYaAr_9EALw_wcB'
    },
    {
      id: 6,
      name: 'Aq-Jol подставка для ноутбука Cold 360',
      description: 'покупай этот прибор чтобы ноут не сгорел',
      price: 11490,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p87/p2f/60859560.jpeg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p87/p2f/60859560.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p87/p2f/60859560.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p87/p2f/60859560.jpeg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/aq-jol-cold-360-141705222/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7imEUCwwPcMlyyqDq-6uRFZ1&gclid=Cj0KCQiAtfXMBhDzARIsAJ0jp3B95kKwt3XXUTFoNoHLIuIeYlwaLN7pgcczA8GPWhZZFAFlvWCjhMYaAr_9EALw_wcB'
    },
    {
      id: 7,
      name: 'Попкорн Восторг готовый сладкий карамель 180 г',
      description: 'My favorite snacks',
      price: 655,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h06/h41/67008908460062.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h06/h41/67008908460062.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h06/h41/67008908460062.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h06/h41/67008908460062.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/vostorg-gotovyi-sladkii-karamel-180-g-102957925/?c=750000000'
    },
    {
      id: 8,
      name: 'Bal Qыmyz кумыс 2% 1000 мл',
      description: 'Best drink this world has to offer',
      price: 1850,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p83/pec/7954648.jpeg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p83/pec/7954648.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p83/pec/7954648.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p83/pec/7954648.jpeg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/bal-qymyz-kumys-2-1000-ml-129939450/?c=750000000'
    },
    {
      id: 9,
      name: 'Мышь Logitech G Pro X Superlight 2 черный',
      description: 'If you have some extra budget',
      price: 70579,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/he9/h06/84049616502814.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/he9/h06/84049616502814.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/he9/h06/84049616502814.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/he9/h06/84049616502814.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/logitech-g-pro-x-superlight-2-chernyi-113548302/'
    },
    {
      id: 10,
      name: 'Холодный чай Maxi чай черный клубника 2 л',
      description: 'If you are not alone u can buy it',
      price: 919,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pc6/p05/83542200.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pc6/p05/83542200.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pc6/p05/83542200.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pc6/p05/83542200.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/holodnyi-chai-maxi-chai-chernyi-klubnika-2-l-151242014/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7imEUCwwPcMlyyqDq-6uRFZ1&gclid=Cj0KCQiAtfXMBhDzARIsAJ0jp3B95kKwt3XXUTFoNoHLIuIeYlwaLN7pgcczA8GPWhZZFAFlvWCjhMYaAr_9EALw_wcB'
    }
  ]
}
