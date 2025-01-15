import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  items: any[] = [
    { id: 1, name: 'Uppercut', price: 25, img: 'assets/uppercut.jpg'},
    { id: 2, name: 'Mullet', price: 25, img: 'assets/uppercut.jpg'}
  ];

  constructor() { }
}
