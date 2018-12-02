import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api-service/api.service';

@Component({
    selector: 'baam-inspect-doc',
    templateUrl: './inspect-doc.component.html',
    styleUrls: ['./inspect-doc.component.scss']
})
export class InspectDocComponent implements OnInit {

    constructor( 
        private apiService: ApiService
    ) { }

    ngOnInit() {


        this.apiService.get( 'inspector' , this.apiService.contractId.toString(), 'actions' ).map( r => r.json() ).subscribe(
            r => {
                console.log(r);

                let returnedId = r.workflowFunctions[0].id ; 
                console.log( 'returnedId: ', returnedId );

                let data = {
                    "workflowFunctionId": returnedId,
                    "workflowActionParameters":[]
                };
                  
                this.apiService.post( 'inspector', this.apiService.contractId.toString() , data  ).subscribe(
                    r => {
                        console.log("post show interest response : " , r );
                    }
                )

            }
        )

    }

}
