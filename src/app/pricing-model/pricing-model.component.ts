import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'baam-pricing-model',
  templateUrl: './pricing-model.component.html',
  styleUrls: ['./pricing-model.component.scss']
})
export class PricingModelComponent implements OnInit {

  public links = [ 
    { title: 'Pricing Model'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
