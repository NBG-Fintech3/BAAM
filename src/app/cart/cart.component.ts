import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'baam-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public links = [ 
    { title: 'Cart'}
  ];

  public items = [
    { title: 'Macroeconomic Report For Greece' , price: '$90,00'},
    { title: 'Report Best Yielding Options', price: 'free' },
    { title: 'Macroeconomic Report For Romania' , price: '$90,00' },
    { title: 'Report Best Yielding Options', price: 'free' },
    { title: 'Macroeconomic Report For Portugal',price: 'free' },
    { title: 'Report Best Yielding Options', price: '$90,00' },
    { title: 'Macroeconomic Report For Spain', price: '$90,00' } 
  ] ;


  constructor() { }

  ngOnInit() {
  }

}
