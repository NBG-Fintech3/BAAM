import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from 'src/app/services/api-service/api.service';

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

    constructor( private apiService: ApiService ) { }

    ngOnInit() {

        this.apiService.get( 'contracts/23/' ).subscribe(
            r => console.log(r)
        );
    }

    addToCart() {
        this.addToCartBtn = true;
    }
}
