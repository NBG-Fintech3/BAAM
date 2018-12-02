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

    answer; 
    answer2;


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
        let headers = new Headers();

        headers.append('Content-Type', 'application/json');
        headers.append('sandbox_id', 'BAAMsandboxBio');
        headers.append('user_id',  '645AF800-8C97-4F47-B489-6B9D7B05B86D');
        headers.append('provider_id',  'NBG.gr');
        headers.append('username',  'User1');
        headers.append('provider',  'NBG');
        headers.append('Client-Id', 'a0e1a464-bf8a-4e76-bfa1-50366ab2655b');
        headers.append('Cache-Control', 'no-cache');

        let data = 
        {
          "image1": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCABpAGkDASIAAhEBAxEB/8QAGgABAQEBAQEBAAAAAAAAAAAAAAUGBAMHAf/EADUQAAEDAwIEBAIIBwAAAAAAAAABAgMEBRESIQYTFDFBUVNhM3EHIiM0gYKRkhUkMkJSscL/xAAaAQEAAgMBAAAAAAAAAAAAAAAAAgMBBAUG/8QALREAAgECAwUGBwAAAAAAAAAAAAECAxEEIWEFEhMxgRQVMnGR8DRBUVJjoeH/2gAMAwEAAhEDEQA/APswAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOOvqnwNa2PZzvHyQn9ZU+s46br8SP5KRbhXrQdPikqKnnzNi+wZq0Z/ud5InmeU2hXrPFShGTy10N6lGO4m0UesqfWcOsqfWcReJL43hyxz3R8CzthVqctrtKrlyN749yjDIksLJETGtqOx5ZTJo8WuoqW87eZZaN7WOnrKn1nDrKn1nHjnfHio7JnwI9orfe/Vmd2P0PbrKn1nDrKn1nELiG/ssEFJK6nWfqqllOiI/Tp1ePYrknVrqKk5Oz1MWje1inQVckr1ikXVtlFO8kW373+VSuen2XUnUw95u+Zp1klPIAA6RSAAATLr8SP5KYH6QZ5oI7JyZpItdzja7Q5Uym+y48DfXX4kfyUhXSzUN4SnStidIlNMk0eHq3D07Lt3PJYqcYY6Upcv4b0E3SsjH8eVt1qeDrxHX2lKKGN8fJl6hsnN+1TwTttuc09vZw1euGK63XCqmmucrYalssyvSoY5Ey7Htn/Rsr1DaLrQ1FtuT0fD9VZY2uVFTCo5O2/kcNo4a4Yt9zjrbbSfzCszG7L3tjRU8M7Nzv5EaeIjGlutNc8ksndJfN9Q4Ny5mN4gWK7Ul5vlspKvFHM5EuMlwcxWPaqbRsTw7YTbuU4qV3EfHslLX1VT0rrTDNJBFKrGvcunuieGVyWarhLhN89bLLROVZlXnI1ZFZqcuFVqJtq38N0yUKSislJdVuNO7FStK2Hma3K1Y2oionlnGlfPC5JyxMVC0E+Ttpy1008jCg75nzaaeobwsyma59R0PEfJp2yPyulN0blfdTYcATPun8Qu1dVyyXJ87opqZyqjaVEXZiN/Dv7fMoN4c4ce7oWxuVz6rr9PMfvLlUzn5tXb2Uow2G3U98mvMMTo6ydmiVzXqjXp7t7Z2TcjXxNOcHFJpv3+zMYNO5ctv3v8AKpXJFt+9/lUrnY2R8N1ZRX8YAB1igAAA4blA+RGvYiu07KiE3lSem79qmgBycTsuFeo6m9a5fCs4q1jKy2ennkfJJTOV8mdTvrJnZqf8N/T3EVoghkjkjp5GrGmG7ux4p2/FTVAp7nytxH76kuPoZSSzU8sj3yUrn8z+prsq1d0Xt27oh+rZ4V1ZhlVHN0qiud/ijc9++ERM99jVAdz/AJH76jj6GYhtscEnMjp3a9CM1qiquEVV7r7uX9T35Unpu/apoARexYvnN+g7RoTbbTyNlWVzVamMJnxKQB1cNh44enuRdymc3N3YABskAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/2Q==",
          "image2": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCABpAGkDASIAAhEBAxEB/8QAGgABAQEBAQEBAAAAAAAAAAAAAAUGBAMHAf/EADUQAAEDAwIEBAIIBwAAAAAAAAABAgMEBRESIQYTFDFBUVNhM3EHIiM0gYKRkhUkMkJSscL/xAAaAQEAAgMBAAAAAAAAAAAAAAAAAgMBBAUG/8QALREAAgECAwUGBwAAAAAAAAAAAAECAxEEIWEFEhMxgRQVMnGR8DRBUVJjoeH/2gAMAwEAAhEDEQA/APswAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOOvqnwNa2PZzvHyQn9ZU+s46br8SP5KRbhXrQdPikqKnnzNi+wZq0Z/ud5InmeU2hXrPFShGTy10N6lGO4m0UesqfWcOsqfWcReJL43hyxz3R8CzthVqctrtKrlyN749yjDIksLJETGtqOx5ZTJo8WuoqW87eZZaN7WOnrKn1nDrKn1nHjnfHio7JnwI9orfe/Vmd2P0PbrKn1nDrKn1nELiG/ssEFJK6nWfqqllOiI/Tp1ePYrknVrqKk5Oz1MWje1inQVckr1ikXVtlFO8kW373+VSuen2XUnUw95u+Zp1klPIAA6RSAAATLr8SP5KYH6QZ5oI7JyZpItdzja7Q5Uym+y48DfXX4kfyUhXSzUN4SnStidIlNMk0eHq3D07Lt3PJYqcYY6Upcv4b0E3SsjH8eVt1qeDrxHX2lKKGN8fJl6hsnN+1TwTttuc09vZw1euGK63XCqmmucrYalssyvSoY5Ey7Htn/Rsr1DaLrQ1FtuT0fD9VZY2uVFTCo5O2/kcNo4a4Yt9zjrbbSfzCszG7L3tjRU8M7Nzv5EaeIjGlutNc8ksndJfN9Q4Ny5mN4gWK7Ul5vlspKvFHM5EuMlwcxWPaqbRsTw7YTbuU4qV3EfHslLX1VT0rrTDNJBFKrGvcunuieGVyWarhLhN89bLLROVZlXnI1ZFZqcuFVqJtq38N0yUKSislJdVuNO7FStK2Hma3K1Y2oionlnGlfPC5JyxMVC0E+Ttpy1008jCg75nzaaeobwsyma59R0PEfJp2yPyulN0blfdTYcATPun8Qu1dVyyXJ87opqZyqjaVEXZiN/Dv7fMoN4c4ce7oWxuVz6rr9PMfvLlUzn5tXb2Uow2G3U98mvMMTo6ydmiVzXqjXp7t7Z2TcjXxNOcHFJpv3+zMYNO5ctv3v8AKpXJFt+9/lUrnY2R8N1ZRX8YAB1igAAA4blA+RGvYiu07KiE3lSem79qmgBycTsuFeo6m9a5fCs4q1jKy2ennkfJJTOV8mdTvrJnZqf8N/T3EVoghkjkjp5GrGmG7ux4p2/FTVAp7nytxH76kuPoZSSzU8sj3yUrn8z+prsq1d0Xt27oh+rZ4V1ZhlVHN0qiud/ijc9++ERM99jVAdz/AJH76jj6GYhtscEnMjp3a9CM1qiquEVV7r7uX9T35Unpu/apoARexYvnN+g7RoTbbTyNlWVzVamMJnxKQB1cNh44enuRdymc3N3YABskAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/2Q=="
        }

        this.http.post( 'https://microsites.nbg.gr/api.gateway/sandbox/biometrics/headers/v1.2/api/biometrics/face-match', 
            data , {headers: headers} ).map(r=>r.json() ).subscribe( r => 
                {
                    this.answer2 = r ;

                    this.answer2.facenum1 = 
                    console.log(r);
                }
            );

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

