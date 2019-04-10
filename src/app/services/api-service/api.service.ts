import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class ApiService {


    // Config 
    private adminToken = {
        accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IndVTG1ZZnNxZFF1V3RWXy1oeFZ0REpKWk00USIsImtpZCI6IndVTG1ZZnNxZFF1V3RWXy1oeFZ0REpKWk00USJ9.eyJhdWQiOiI5OGE2ZTk2MC1kNDM1LTQzMmMtOGM4Zi01OTM3NmNkZGQxMGUiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC8yYzUwYTUyNy0wMmZmLTQ5MmItYmU4ZC05MDYwNTFmZGY1M2UvIiwiaWF0IjoxNTQzNzY4MDMzLCJuYmYiOjE1NDM3NjgwMzMsImV4cCI6MTU0Mzc3MTkzMywiYWNyIjoiMSIsImFpbyI6IkFVUUF1LzhKQUFBQUZmR2FUTDcveW1xWTB5QXNmeUN3enVCUHFrL0ZCYmlBMmkwMWlzNE9ZSTFRZElNTUZSLzNzMzFCa2YrcEUveWNVSnlQQ0JSZExsNVNVVHhmTVYwM3lBPT0iLCJhbXIiOlsicHdkIl0sImFwcGlkIjoiNjVlYjU2M2MtYzgwOS00NWVhLTkyM2ItZjZjZmI3NTFhNTk0IiwiYXBwaWRhY3IiOiIxIiwiZW1haWwiOiJta29yZGVsYWtvc0BnbWFpbC5jb20iLCJmYW1pbHlfbmFtZSI6IktvcmRlbGFrb3MiLCJnaXZlbl9uYW1lIjoiTWljaGFpbCIsImlkcCI6ImxpdmUuY29tIiwiaXBhZGRyIjoiMTk1Ljc4Ljg2LjE5MCIsIm5hbWUiOiJta29yZGVsYWtvcyIsIm9pZCI6ImI5Y2Y5YTQzLTE1ZGYtNDhkZS05MTM3LTA1MWUwZGUyY2U2YSIsInJvbGVzIjpbIkFkbWluaXN0cmF0b3IiXSwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic3ViIjoiOTdFbE5RdmJCU2ZjWFpLT3lpOElsMWJ3bnNZdy1ncFlocWdYVGEyZzhtbyIsInRpZCI6IjJjNTBhNTI3LTAyZmYtNDkyYi1iZThkLTkwNjA1MWZkZjUzZSIsInVuaXF1ZV9uYW1lIjoibGl2ZS5jb20jbWtvcmRlbGFrb3NAZ21haWwuY29tIiwidXRpIjoiVFBZck1oQW9mRXlvXzgtS2xia0dBQSIsInZlciI6IjEuMCJ9.H470VAuGskyUFLd-qty1UaYstqmIGqrtgVjqkCSMwZrQ76KVVXde-HqzPSGHOP2oUbt7zyVsk3KYF4XUsOC7SKmg2Zuce30JpDjngrlXXfU6fEUUPZ6hyW05Xb8490UX_SpWl_MLnh3zx9-Z7EYYwLVk3m4CwTGYXDW9dy7YodX27qkRA4x4H8JkExDlqEqCVDvQ1F6saBRM3rniKhIqaKHcqocgyMDS5FUs92PtA6Ba-NPV2Htu0BihQZ12h-M8d8C3l4AZKp-HrTQvlRUfIWbHC7LId3No7huWmIvTePRGi_EfnXgwmQp-ceP-9g9yBsbnxXOUbMOZywBiUrQ5HQ'
    }
    
    private byerToken = {
        accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IndVTG1ZZnNxZFF1V3RWXy1oeFZ0REpKWk00USIsImtpZCI6IndVTG1ZZnNxZFF1V3RWXy1oeFZ0REpKWk00USJ9.eyJhdWQiOiI5OGE2ZTk2MC1kNDM1LTQzMmMtOGM4Zi01OTM3NmNkZGQxMGUiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC8yYzUwYTUyNy0wMmZmLTQ5MmItYmU4ZC05MDYwNTFmZGY1M2UvIiwiaWF0IjoxNTQzNzY3OTc2LCJuYmYiOjE1NDM3Njc5NzYsImV4cCI6MTU0Mzc3MTg3NiwiYWNyIjoiMSIsImFpbyI6IkFVUUF1LzhKQUFBQVdhY3krR1FIelhROXZGdW5EWU1uZ0NtMFBtRFJxRnJRRHQyTnJYd2RBVW5CYWROODkxbUFoWG9PMTZ1bi9oR0lTUjdoZHBncTBsOHZyaS9TRldHRGRBPT0iLCJhbXIiOlsicHdkIl0sImFwcGlkIjoiNjVlYjU2M2MtYzgwOS00NWVhLTkyM2ItZjZjZmI3NTFhNTk0IiwiYXBwaWRhY3IiOiIxIiwiZW1haWwiOiJ0ZXJlc2FwYXAyN0BnbWFpbC5jb20iLCJmYW1pbHlfbmFtZSI6IlBhcGFnZW9yZ2lvdSIsImdpdmVuX25hbWUiOiJUZXJlc2EiLCJpZHAiOiJsaXZlLmNvbSIsImlwYWRkciI6IjE5NS43OC44Ni4xOTAiLCJuYW1lIjoiVGVyZXNhIFBhcGFnZW9yZ2lvdSIsIm9pZCI6ImExZjJkMWE1LTVkODEtNDQyNi04OGM3LTZiZjAwNTU4ZDIyOCIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInN1YiI6IjhUbnVYQlBUYUg1cktONl9YZ2FqeWc5QmpZVVBsc2ppelBIWVlGbHBEaWsiLCJ0aWQiOiIyYzUwYTUyNy0wMmZmLTQ5MmItYmU4ZC05MDYwNTFmZGY1M2UiLCJ1bmlxdWVfbmFtZSI6ImxpdmUuY29tI3RlcmVzYXBhcDI3QGdtYWlsLmNvbSIsInV0aSI6IkRhWm84RDRpQTAtWVZnb1J3bThMQUEiLCJ2ZXIiOiIxLjAifQ.FrNOjroksIbdqksk597fGnGzcUaLeCZkoeIjP3pY130V_FJmDTGY-t5OLmkvxZZ_CXj5wi24QmCJqnkwE1SkIqbMVyFu0K9CPXVUU4q2QbjPIj7qHB0OCvSRXaB9vTNhjxH4tJj32264q83lDnVJIQ53EFnYhJW7V3s6g84J_xNzKLXEiwNv7THmEY_7zwOrKSRJz1J3qvMdo6ytWRRZhTymfpn3yqoIMnLOvIsQkgqxKuWf6K4VaZPQP2M2XsZLGp5IDyBS4hZPiMlhOat0w3Ar6Pd2Mg1rhUyhcJQO3KpWmkxokG74Zdc4xjWgFa2dok0t1TJkTlk4CmXq75tHAg'
    }

    private inspectorToken = {
        accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IndVTG1ZZnNxZFF1V3RWXy1oeFZ0REpKWk00USIsImtpZCI6IndVTG1ZZnNxZFF1V3RWXy1oeFZ0REpKWk00USJ9.eyJhdWQiOiI5OGE2ZTk2MC1kNDM1LTQzMmMtOGM4Zi01OTM3NmNkZGQxMGUiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC8yYzUwYTUyNy0wMmZmLTQ5MmItYmU4ZC05MDYwNTFmZGY1M2UvIiwiaWF0IjoxNTQzNzY4MTM2LCJuYmYiOjE1NDM3NjgxMzYsImV4cCI6MTU0Mzc3MjAzNiwiYWNyIjoiMSIsImFpbyI6IkFVUUF1LzhKQUFBQTM4RFBiUGZTODhrNzJaQzBZYnRMc0ZBMHBWUGp5VFVQM0hoaXJWbFIzVVMycFl4dllyMjJxOEFvUlQrWnBrQm1yalFITGFnYXNybzlZa3ZTQ1BrZHNBPT0iLCJhbXIiOlsicHdkIl0sImFwcGlkIjoiNjVlYjU2M2MtYzgwOS00NWVhLTkyM2ItZjZjZmI3NTFhNTk0IiwiYXBwaWRhY3IiOiIxIiwiZW1haWwiOiJhZmF0bGVzc0BnbWFpbC5jb20iLCJmYW1pbHlfbmFtZSI6IkZhdGxlcyIsImdpdmVuX25hbWUiOiJBbGV4IiwiaWRwIjoibGl2ZS5jb20iLCJpcGFkZHIiOiIxOTUuNzguODYuMTkwIiwibmFtZSI6ImFmYXRsZXNzIiwib2lkIjoiY2ZhNDkzODMtYzYxZi00MmQxLTg3MWEtNmJmZTNmMmQyOTI2Iiwicm9sZXMiOlsiQWRtaW5pc3RyYXRvciJdLCJzY3AiOiJ1c2VyX2ltcGVyc29uYXRpb24iLCJzdWIiOiJwSFhkV2k5MUt6WFRKaWpnQXQwNVVBTDlJMEk0Y045YzZTTi0xQTMzaXNzIiwidGlkIjoiMmM1MGE1MjctMDJmZi00OTJiLWJlOGQtOTA2MDUxZmRmNTNlIiwidW5pcXVlX25hbWUiOiJsaXZlLmNvbSNhZmF0bGVzc0BnbWFpbC5jb20iLCJ1dGkiOiJzSFMxRVRKbkYwNkc0NUg1bW5vTEFBIiwidmVyIjoiMS4wIn0.k-PP-QoAmsCpLyGOH7k29xmUjAhD2E5mWjObZM0sR8Fq2UwMJf-tSvn1K_OyiWTEV5N5Wug7wbruP-uQ9kFB-bi-J8VKZ1yVt3ucpOA5WRPqm8NdeiYf5-nB3_u9Nr5AyBekScGIPpnRhP-WaJCsxLDW-7-QBVsF8xHdU_MFup9tbQIeGeAPssMx3CbjB5csmH59NZD8X3ey7uItA_47bNlVFOkRk-0s1BsJfHT_EppKxnUvwh9Arq6V6BFgHsioaNplvH-65U9c3L5sfqx0r1FXHQbstUswQ59wH4wWOKQTbWPX4k0HrHcjjeOr3E0BbMH-zKomRu0olgYiFGRuuQ'
    }

    public contractId = 39;


    // Private vars 
    private authOptions: RequestOptions;



    constructor( private http: Http ) { }

    public get( user:string , contractId: string , data?: string ) : Observable<Response> {
        
        this.setAuthToken(user);

        let url = 'https://baamchain-4xxkmx-api.azurewebsites.net/api/v2/contracts/' +contractId+'/';
        if (data) url = url + data;
    
        return this.http.get( url , this.authOptions );
    }


    
    public post( user:string, contractId: string , data: any ) : Observable<Response> {
        
        this.setAuthToken(user);
        
        let authOptions = this.authOptions;

        let url = 'https://baamchain-4xxkmx-api.azurewebsites.net/api/v2/contracts/'+contractId+'/actions';

        return this.http.post( url, data, authOptions);
    }


    setAuthToken( user : string ) {
        let headers = new Headers();

        switch(user) {
            case 'buyer': 
                // create - Make offer
                headers.append('Authorization', `Bearer `+ this.byerToken.accessToken );
                break;            
            case 'admin':
                headers.append('Authorization', `Bearer `+ this.adminToken.accessToken );
                break; 
            case 'inspector':
                headers.append('Authorization', `Bearer `+ this.inspectorToken.accessToken );
                break;
            default: 
                break;
        }

        this.authOptions = new RequestOptions( {  headers: headers });

    }

    // private authOptionss(): RequestOptions {
    //     let headers = new Headers();
    //     headers.append('Authorization', `Bearer `+ );
    //     return new RequestOptions( {  headers: headers });
    // }


}
