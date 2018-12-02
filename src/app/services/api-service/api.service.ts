import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class ApiService {


    // Config 
    private adminToken = {
        accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IndVTG1ZZnNxZFF1V3RWXy1oeFZ0REpKWk00USIsImtpZCI6IndVTG1ZZnNxZFF1V3RWXy1oeFZ0REpKWk00USJ9.eyJhdWQiOiI5OGE2ZTk2MC1kNDM1LTQzMmMtOGM4Zi01OTM3NmNkZGQxMGUiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC8yYzUwYTUyNy0wMmZmLTQ5MmItYmU4ZC05MDYwNTFmZGY1M2UvIiwiaWF0IjoxNTQzNzU2MDgxLCJuYmYiOjE1NDM3NTYwODEsImV4cCI6MTU0Mzc1OTk4MSwiYWNyIjoiMSIsImFpbyI6IkFVUUF1LzhKQUFBQWRkVWxMTGFocXEwdFI5SEY3S01hSXB2QnRad1BhS2ZoZWh1U1padWVHTUY4VG9PQjNlY3U1R2hScWRleTVDbVZ1UUNYY1dUa0NvYVBiU1Q3TWZFbERnPT0iLCJhbXIiOlsicHdkIl0sImFwcGlkIjoiNjVlYjU2M2MtYzgwOS00NWVhLTkyM2ItZjZjZmI3NTFhNTk0IiwiYXBwaWRhY3IiOiIxIiwiZW1haWwiOiJta29yZGVsYWtvc0BnbWFpbC5jb20iLCJmYW1pbHlfbmFtZSI6IktvcmRlbGFrb3MiLCJnaXZlbl9uYW1lIjoiTWljaGFpbCIsImlkcCI6ImxpdmUuY29tIiwiaXBhZGRyIjoiMTk1Ljc4Ljg2LjE5MCIsIm5hbWUiOiJta29yZGVsYWtvcyIsIm9pZCI6ImI5Y2Y5YTQzLTE1ZGYtNDhkZS05MTM3LTA1MWUwZGUyY2U2YSIsInJvbGVzIjpbIkFkbWluaXN0cmF0b3IiXSwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic3ViIjoiOTdFbE5RdmJCU2ZjWFpLT3lpOElsMWJ3bnNZdy1ncFlocWdYVGEyZzhtbyIsInRpZCI6IjJjNTBhNTI3LTAyZmYtNDkyYi1iZThkLTkwNjA1MWZkZjUzZSIsInVuaXF1ZV9uYW1lIjoibGl2ZS5jb20jbWtvcmRlbGFrb3NAZ21haWwuY29tIiwidXRpIjoieFdPc3FXUkRvMHVhd2gwS01Mc0lBQSIsInZlciI6IjEuMCJ9.DCa8tYujJVE9-zopNpZ-7EvAzE1F4ZjGpqlhSGrsgXAinb2LkSGOyGI8KL5df_jh0lB0Q2PAIJH6H9NKZVV2Zt4PtFGKuql9u_yzgq4rGYGnhk8Hq8MJ6Lx9JrHDNcLDWJtZFsnbaSUP1nlcziEy25vRBDIPRg53-G2-dAj-QOxtrGPpApXGYbWREAOJ35Wk3mWKm5LeWKqN545xxPGG4xjVubaaJM0gnKYg7Ywlf6DYBzCmvQCGqBvo9MACAhC_EUXbIc1BKVxhjKRNC02uJPuD05Hu4JEdrhXOlw3Ovx76a3CO2nrM5OBVc9GKTs1mmhgi8qNgejdQtkf_h9dd1w',
    }
    
    private byerToken = {
        accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IndVTG1ZZnNxZFF1V3RWXy1oeFZ0REpKWk00USIsImtpZCI6IndVTG1ZZnNxZFF1V3RWXy1oeFZ0REpKWk00USJ9.eyJhdWQiOiI5OGE2ZTk2MC1kNDM1LTQzMmMtOGM4Zi01OTM3NmNkZGQxMGUiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC8yYzUwYTUyNy0wMmZmLTQ5MmItYmU4ZC05MDYwNTFmZGY1M2UvIiwiaWF0IjoxNTQzNzU0NzAxLCJuYmYiOjE1NDM3NTQ3MDEsImV4cCI6MTU0Mzc1ODYwMSwiYWNyIjoiMSIsImFpbyI6IkFVUUF1LzhKQUFBQXREdURWbGZoRXJEUVg4MitrZFpiR0o0VlRTNFZ2Q0ViS3RlZXZvV0JsTms2a3F4TUpNM0gwdmgvKy8vMlBrTU9QbGhXL3BHTWxDdlRVdXVBb3piMzZ3PT0iLCJhbXIiOlsicHdkIl0sImFwcGlkIjoiNjVlYjU2M2MtYzgwOS00NWVhLTkyM2ItZjZjZmI3NTFhNTk0IiwiYXBwaWRhY3IiOiIxIiwiZW1haWwiOiJ0ZXJlc2FwYXAyN0BnbWFpbC5jb20iLCJmYW1pbHlfbmFtZSI6IlBhcGFnZW9yZ2lvdSIsImdpdmVuX25hbWUiOiJUZXJlc2EiLCJpZHAiOiJsaXZlLmNvbSIsImlwYWRkciI6IjE5NS43OC44Ni4xOTAiLCJuYW1lIjoiVGVyZXNhIFBhcGFnZW9yZ2lvdSIsIm9pZCI6ImExZjJkMWE1LTVkODEtNDQyNi04OGM3LTZiZjAwNTU4ZDIyOCIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInN1YiI6IjhUbnVYQlBUYUg1cktONl9YZ2FqeWc5QmpZVVBsc2ppelBIWVlGbHBEaWsiLCJ0aWQiOiIyYzUwYTUyNy0wMmZmLTQ5MmItYmU4ZC05MDYwNTFmZGY1M2UiLCJ1bmlxdWVfbmFtZSI6ImxpdmUuY29tI3RlcmVzYXBhcDI3QGdtYWlsLmNvbSIsInV0aSI6InFXdkZGYUo3MDBLVjdwRjFzSjBIQUEiLCJ2ZXIiOiIxLjAifQ.jRmTwq7KyCRKj15DW0Qa__aFwaSBu6tzxlp6khQfaJ-8DPkd0ktWeN5GUP30AxEoxPEwdfVdGifOdkwXAlz6KpSomT7Tfw1XH92IbiCJrAektb0bmfuWhYcB7785m_QV1gRkBn6tCwaW2TM4Ba-UmuzC6Od0J8mQ5qbn6p2eNZU1DsZs5YHOOturuUcXGenNSgSOvEEXm3eo6j8nN_WV15AFaplj5m_n-MHfwlNCVyoqb8TW1FgTXrTlW5rblwG5-P4sLPjKHgJcSqiq-VFfJRaSq59RaNyHPVwTnNFDtLoc2XNYeNu2vsvb3MIsSkfGWkxV8viSiCmpuPYjkb8n0g',
    }

    private inspectorToken = {
        accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IndVTG1ZZnNxZFF1V3RWXy1oeFZ0REpKWk00USIsImtpZCI6IndVTG1ZZnNxZFF1V3RWXy1oeFZ0REpKWk00USJ9.eyJhdWQiOiI5OGE2ZTk2MC1kNDM1LTQzMmMtOGM4Zi01OTM3NmNkZGQxMGUiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC8yYzUwYTUyNy0wMmZmLTQ5MmItYmU4ZC05MDYwNTFmZGY1M2UvIiwiaWF0IjoxNTQzNzU2NjMwLCJuYmYiOjE1NDM3NTY2MzAsImV4cCI6MTU0Mzc2MDUzMCwiYWNyIjoiMSIsImFpbyI6IkFVUUF1LzhKQUFBQW9udHlnMTJObDRXM2ZRZ0JrQVAwdGJBZVhkZzVmb1RXYyswMXppbmVXNDc3dVBvait4VFdSRis2clA1MEY1aGZJekRxSEUzc3d6VHRwa0lGaisxOVhRPT0iLCJhbXIiOlsicHdkIl0sImFwcGlkIjoiNjVlYjU2M2MtYzgwOS00NWVhLTkyM2ItZjZjZmI3NTFhNTk0IiwiYXBwaWRhY3IiOiIxIiwiZW1haWwiOiJhZmF0bGVzc0BnbWFpbC5jb20iLCJmYW1pbHlfbmFtZSI6IkZhdGxlcyIsImdpdmVuX25hbWUiOiJBbGV4IiwiaWRwIjoibGl2ZS5jb20iLCJpcGFkZHIiOiIxOTUuNzguODYuMTkwIiwibmFtZSI6ImFmYXRsZXNzIiwib2lkIjoiY2ZhNDkzODMtYzYxZi00MmQxLTg3MWEtNmJmZTNmMmQyOTI2Iiwicm9sZXMiOlsiQWRtaW5pc3RyYXRvciJdLCJzY3AiOiJ1c2VyX2ltcGVyc29uYXRpb24iLCJzdWIiOiJwSFhkV2k5MUt6WFRKaWpnQXQwNVVBTDlJMEk0Y045YzZTTi0xQTMzaXNzIiwidGlkIjoiMmM1MGE1MjctMDJmZi00OTJiLWJlOGQtOTA2MDUxZmRmNTNlIiwidW5pcXVlX25hbWUiOiJsaXZlLmNvbSNhZmF0bGVzc0BnbWFpbC5jb20iLCJ1dGkiOiJSbDBQaFcwNnFVZU54RW1TYnZnSUFBIiwidmVyIjoiMS4wIn0.UrbNeu4CB87thkPao4FBuvEeeGQ_dOjDaVbQrgaW4q7Xn0PE81DLBWFPMKp0tqIB-TEtuxy9qwKwfZgf_eQAU64nz7t4j10ehv9Jep0T8wt4WaiZsGie9kJ8oWEYGt7ocQoDly0cxWAQaUcVhoPq9pNKsDN6Ld6pwuQ2E_IpJpPo0r0xTeRI62o4BunCom0zknoffV0ypYp5SzEbUw4BPwHxXxUdCi2CQz-VkyMaa5J6kFPp7SJjOQIgJBu4N2lRjPDUAe6lVNAXUh0sd5mzhUIezatNpt8tzOY0fiu9kmjBWFU85j0IResp-RDgednFXwp_ZodEDMGZPp8PlVEczA'
    }

    public contractId = 37;


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
