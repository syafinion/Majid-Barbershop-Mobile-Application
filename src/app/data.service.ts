import { Injectable } from '@angular/core';

// Category Interface
export interface ICategory {
  id: number,
  name: string,
  image: string,
}

// Product Interface
export interface IProduct {
  id: number,
  name: string,
  price: number,
  image: string,
  category: string,
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getCategories() {
    let categories = [];

    let cat1: ICategory = {
      id: 1,
      name: 'Womens',
      image: '../../assets/categories/category-1.png'
    }
    let cat2: ICategory = {
      id: 2,
      name: 'Mens',
      image: '../../assets/categories/category-2.png'
    }
    let cat3: ICategory = {
      id: 3,
      name: 'Kids',
      image: '../../assets/categories/category-3.png'
    }

    categories.push(cat1, cat2, cat3);

    return categories;
  }

  getFeaturedProducts() {
    let products = [];

    let prod1: IProduct = {
      id: 1,
      name: 'Uppercut',
      price: 10,
      category: '',
      image: '../../assets/hairstyle/uppercut.jpg'
    }
    let prod2: IProduct = {
      id: 2,
      name: 'Mullet',
      price: 10,
      category: '',
      image: '../../assets/hairstyle/mullet.jpg'
    }
    let prod3: IProduct = {
      id: 1,
      name: 'Bald',
      price: 10,
      category: '',
      image: '../../assets/hairstyle/bald.jpg'
    }

    products.push(prod1, prod2, prod3);

    return products;
  }

  getBestSellProducts() {
    let products = [];

    let prod1: IProduct = {
      id: 1,
      name: 'Haircut',
      price: 15,
      category: 'Adult',
      image: '../../assets/hairstyle/adult.jpeg'
    }
    let prod2: IProduct = {
      id: 2,
      name: 'Haircut',
      price: 10,
      category: 'Kids',
      image: '../../assets/hairstyle/kids.jpeg'
    }
    let prod3: IProduct = {
      id: 1,
      name: 'Shaving',
      price: 5,
      category: 'Adult',
      image: '../../assets/hairstyle/shae.jpg'
    }

    products.push(prod1, prod2, prod3);

    return products;
  }
}
