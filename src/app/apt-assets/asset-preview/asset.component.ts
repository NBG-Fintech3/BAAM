import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'baam-asset',
    templateUrl: './asset.component.html',
    styleUrls: ['./asset.component.scss']
})
export class AssetComponent implements OnInit {

    public showInterestForm = new FormGroup({
        name: new FormControl(''),
        email: new FormControl('')
    });
    public addToCartBtn: boolean = false;
    
    public links = [
        { title: 'Assets', url: 'assets' },
        { title: 'Santorini, Oia' }
    ];

    constructor() { }

    ngOnInit() {
    }

    addToCart() {
        this.addToCartBtn = true;
    }
}
