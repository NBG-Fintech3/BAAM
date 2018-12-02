import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api-service/api.service';

@Component({
    selector: 'baam-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

    showLogin = true;

    
    constructor(
        private apiService: ApiService
    ) { }

    ngOnInit() {
    }

    acceptTransaction() {
        // console.log('heh');
        // return;

        this.apiService.get('buyer', this.apiService.contractId.toString(), 'actions').map(r => r.json()).subscribe(
            r => {
                console.log(r);

                let returnedId = r.workflowFunctions[0].id;
                console.log('returnedId: ', returnedId);

                let data = {
                    "workflowFunctionId": returnedId,
                    "workflowActionParameters": [
                        {
                            "name": "digitalCertificateHash",
                            "value": "34234234234"
                        }
                    ]
                };

                this.apiService.post('buyer', this.apiService.contractId.toString(), data).subscribe(
                    r => {
                        console.log("post show interest response : ", r);
                    }
                )

            }
        )

    }

}
