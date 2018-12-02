import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ApiService } from '../../services/api-service/api.service';
import { Http, RequestOptions, Headers } from '@angular/http';
import { map } from 'rxjs/operator/map';

@Component({
    selector: 'baam-inspect-doc',
    templateUrl: './inspect-doc.component.html',
    styleUrls: ['./inspect-doc.component.scss']
})
export class InspectDocComponent implements OnInit {

    @ViewChild('answer') answer: ElementRef ; 


    constructor( 
        private apiService: ApiService,
        private http: Http
    ) { }

    ngOnInit() {  }

    ocrPassport() {

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('sandbox_id',  'BAAMsandboxOCR');
        headers.append('user_id',  '645AF800-8C97-4F47-B489-6B9D7B05B86D');
        headers.append('provider_id',  'NBG.gr');
        headers.append('username',  'User1');
        headers.append('provider',  'NBG');
        headers.append('Client-Id',  'a0e1a464-bf8a-4e76-bfa1-50366ab2655b');
        headers.append('Cache-Control',  'no-cache');

        let data = {
            "header": {
            "ID": "78301201-148C-42B1-994E-BFADD6BE64C4",
            "application": "78301201-148C-42B1-994E-BFADD6BE64C4",
            "bank": "string",
            "hostSession": "string",
            "channel": "nbg",
            "customer": 0,
            "logitude": 0,
            "latitude": 0,
            "go4moreMember": true,
            "TAN": "string"
          },
                        "payload": {
                                        "initialDocument":"/9j/2wCEAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDIBCQkJDAsMGA0NGDIhHCEyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMv/AABEIAcwBzAMBIgACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5",
                            "declaredDocumentType": "1CC5088D-2E92-41E6-B012-62DD0200BF16",
                            "initialDocumentFormat": "JPG",
                            "initialDocumentName": "asd",
                            "isMultiPage": false
                        }
        
        };

        this.http.post( 'https://microsites.nbg.gr/api.gateway/sandbox/ocr/headers/v1.1/OcrDocument/uploadDocument', 
            data , {headers: headers} ).map(r=>r.json() ).subscribe( r => 
                {
                    this.answer = r ;
                    console.log(r);
                }
               );
    }

    biometricsPassport() {
        
    }

    inspectionSuccess() {
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

