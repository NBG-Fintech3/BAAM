import { Component, OnInit } from '@angular/core';
import { ContractsService } from '../services/contracts/contracts.service';

@Component({
    selector: 'baam-checkout',
    templateUrl: './checkout.component.html'
})
export class CheckoutComponent implements OnInit
{

    public links = [] ; // empty

    constructor( private cs: ContractsService ) { }

    ngOnInit() {
    }

    testBlockchain() {
        console.log("button 1 click");
        // let testVar = this.cs.getDefaultAccount();
        console.log("returned data: ", 'testVar'  );
    }
    

}
