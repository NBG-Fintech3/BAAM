import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api-service/api.service';

@Component({
    selector: 'baam-admin-dashboard',
    templateUrl: './admin-dashboard.component.html',
    styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

    public users = [
        { name: 'Michael D. Aitken', guid: '70b45984-225e-4a14-9d05-fdd5c42157b2', status: 'pending' },
        { name: 'Sakari Pohjamo', guid: '9f40049f-a208-4566-aced-db2bb2e37e81', status: 'done' },
        { name: 'John P. Poulos', guid: '21a29ada-740b-4447-9498-8a7f59e4ab01', status: 'done' },
        { name: 'Alison J. Anderson', guid: '8f254aaf-4527-4759-bb4f-7b3fcbcd21ea', status: 'done' },
        { name: 'Nathan S. Cabrera', guid: 'a7ab084b-639a-4bb7-9c21-e00f044e1aea', status: 'done' },
        { name: 'Ruby J. Bourgeois', guid: 'ca7266fc-e566-40d8-afc9-04ba0bc9d743', status: 'done' }

    ]


    constructor(
        private router: Router,
        private apiService: ApiService ) { }

    ngOnInit() {

        this.apiService.get( 'admin' , this.apiService.contractId.toString(), 'actions' ).map( r => r.json() ).subscribe(
            r => {
                console.log(r);

                let returnedId = r.workflowFunctions[0].id ; 
                console.log( 'returnedId: ', returnedId );

                let data = {
                    "workflowFunctionId": 96,
                    "workflowActionParameters":
                        [{
                            "name": "BankInspector",
                            "value": "0xab004d62497133d51dca9a93d7114c7e9ac56fed"
                        }]
                };
                  
                this.apiService.post( 'admin', this.apiService.contractId.toString() , data  ).subscribe(
                    r => {
                        console.log("post show interest response : " , r );
                    }
                )

            }
        )


    }

}
