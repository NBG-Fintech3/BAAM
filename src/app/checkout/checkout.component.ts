import { Component, OnInit } from '@angular/core';
import { ContractsService } from '../services/contracts/contracts.service';
import { ApiService } from '../services/api-service/api.service';

@Component({
    selector: 'baam-checkout',
    templateUrl: './checkout.component.html'
})
export class CheckoutComponent implements OnInit
{

    public links = [] ; // empty

    constructor( 
        private cs: ContractsService,
        private apiService: ApiService ) { }

    ngOnInit() {
    }

    makeOffer() {

        // GET MAKE OFFER
        this.apiService.get( 'buyer' , this.apiService.contractId.toString() , '/actions').map( r=> r.json() ).subscribe( 
            r => {
                console.log('Show interest: ', r) 

                let returnedId = r.workflowFunctions[0].id ; 
                console.log( 'returnedId: ', returnedId )
               
                let data = {
                    "workflowFunctionId": returnedId,
                    "workflowActionParameters":[]
                };

                console.log('data' , data );


                this.apiService.post( 'buyer', this.apiService.contractId.toString() , data  ).subscribe(
                    r => {
                        console.log("post show interest response : " , r );
                    }
                )
            } 
        );
       
    }
    

}
