import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
	selector: 'baam-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    
    public searchAssetHomeForm: FormGroup;
	public countryField: string = 'COUNTRY';
	public assetTypeField: string = 'ASSET TYPE';

	constructor(private router: Router) { }

	ngOnInit() {
	}

	setCountry(val: string) {
		this.countryField = val;
	}
	setAssetType(val: string) {
		this.assetTypeField = val;
	}
}
