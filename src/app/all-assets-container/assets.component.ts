import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'baam-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.scss']
})
export class AssetsComponent implements OnInit {

  public countryField: string = 'COUNTRY';
	public assetTypeField: string = 'ASSET TYPE';

  public links = [ 
    { title: 'Assets'}
  ];

  constructor() { }

  ngOnInit() {
  }

  setCountry(val: string) {
		this.countryField = val;
	}
	setAssetType(val: string) {
		this.assetTypeField = val;
	}
  


}
