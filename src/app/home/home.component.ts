import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from '../services/api-service/api.service';

@Component({
	selector: 'baam-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    


    public acceptRejectForm = new FormGroup({
        name: new FormControl(''),
        email: new FormControl('')
    });



    public searchAssetHomeForm = new FormGroup({
        searchTextInput : new FormControl('')
    });
	public countryField: string = 'COUNTRY';
	public assetTypeField: string = 'ASSET TYPE';

	constructor(
        private router: Router,
        private apiService: ApiService) { }

	ngOnInit() {
	}

	setCountry(val: string) {
		this.countryField = val;
	}
	setAssetType(val: string) {
		this.assetTypeField = val;
    }
    

    acceptTransaction() {
        // console.log('heh');
        // return;

        this.apiService.get( 'buyer' , this.apiService.contractId.toString(), 'actions' ).map( r => r.json() ).subscribe(
            r => {
                console.log(r);

                let returnedId = r.workflowFunctions[0].id ; 
                console.log( 'returnedId: ', returnedId );

                let data = {
                    "workflowFunctionId": returnedId,
                    "workflowActionParameters": [
                        {
                            "name":"digitalCertificateHash",
                            "value":"34234234234"
                        }
                    ]
                };
                  
                this.apiService.post( 'buyer', this.apiService.contractId.toString() , data  ).subscribe(
                    r => {
                        console.log("post show interest response : " , r );
                    }
                )

            }
        )

    }


}
