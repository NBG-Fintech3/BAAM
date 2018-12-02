import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from '../../services/api-service/api.service';

import 'rxjs/add/operator/map';

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

    public assetData;


    constructor( private apiService: ApiService ) { }

    ngOnInit() {

    }


    showInterest() {
        this.addToCartBtn = !this.addToCartBtn;

        

    }

}
