import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api-service/api.service';

@Component({
    selector: 'baam-search-results',
    templateUrl: './search-results.component.html',
    styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

    public allAssets = [];

    constructor(private apiService: ApiService) { }

    ngOnInit() {
        let contractNum = 34;

        for ( let i=0; i<2 ; i++ ) {
            this.apiService.get( 'buyer', contractNum.toString() ).map( r => r.json() ).subscribe(
                r => {
                    this.allAssets[i] = r;
                    console.log( 'Get all assets: '+i+'th time: ' , this.allAssets);   
                }
            );
            contractNum++;
        }
      
    }

}
