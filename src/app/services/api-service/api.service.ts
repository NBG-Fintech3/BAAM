import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';


const constants = {
    API_ENDPOINT: 'https://baamchain-4xxkmx-api.azurewebsites.net/api/v1/'
};

@Injectable()
export class ApiService {

    private token: string = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IndVTG1ZZnNxZFF1V3RWXy1oeFZ0REpKWk00USIsImtpZCI6IndVTG1ZZnNxZFF1V3RWXy1oeFZ0REpKWk00USJ9.eyJhdWQiOiI5OGE2ZTk2MC1kNDM1LTQzMmMtOGM4Zi01OTM3NmNkZGQxMGUiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC8yYzUwYTUyNy0wMmZmLTQ5MmItYmU4ZC05MDYwNTFmZGY1M2UvIiwiaWF0IjoxNTQzNjc3OTIyLCJuYmYiOjE1NDM2Nzc5MjIsImV4cCI6MTU0MzY4MTgyMiwiYWNyIjoiMSIsImFpbyI6IkFVUUF1LzhKQUFBQThKczVpSnZEbmNTZHVSbUt5ZHVUQXBzcEVNVFVDQnh2NE13aWt5MkgydVhwdWt6eFVTQlp4dWtoYy9FWExMQStkc2M2YjROUXg4bm42cjU4S3lQcCtnPT0iLCJhbXIiOlsicHdkIl0sImFwcGlkIjoiNjVlYjU2M2MtYzgwOS00NWVhLTkyM2ItZjZjZmI3NTFhNTk0IiwiYXBwaWRhY3IiOiIxIiwiZW1haWwiOiJta29yZGVsYWtvc0BnbWFpbC5jb20iLCJmYW1pbHlfbmFtZSI6IktvcmRlbGFrb3MiLCJnaXZlbl9uYW1lIjoiTWljaGFpbCIsImlkcCI6ImxpdmUuY29tIiwiaXBhZGRyIjoiMTk1Ljc4Ljg2LjE5MCIsIm5hbWUiOiJta29yZGVsYWtvcyIsIm9pZCI6ImI5Y2Y5YTQzLTE1ZGYtNDhkZS05MTM3LTA1MWUwZGUyY2U2YSIsInJvbGVzIjpbIkFkbWluaXN0cmF0b3IiXSwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic3ViIjoiOTdFbE5RdmJCU2ZjWFpLT3lpOElsMWJ3bnNZdy1ncFlocWdYVGEyZzhtbyIsInRpZCI6IjJjNTBhNTI3LTAyZmYtNDkyYi1iZThkLTkwNjA1MWZkZjUzZSIsInVuaXF1ZV9uYW1lIjoibGl2ZS5jb20jbWtvcmRlbGFrb3NAZ21haWwuY29tIiwidXRpIjoiSXFsdlpOZ1VrMGVkVG9WTkxNel9BUSIsInZlciI6IjEuMCJ9.WNWdB9VEDF4BCnPEN9qKYMHrbK0P_JtFri4dWUEnlU77jgMfXuWg-o7KxLbig86d4xwuRS2DaNaD6nK1dhl8jmeVS-lHE2Xyd351TJjzNcUYROE3rGQ6N7PIKCA1ZQGAGyf__QjVWlfOddB-bqhMjlaN3i-tcb1RP6K0f9vkaGOtiWf9iP8kST2l2TJt64gCMjc9up7c2utpGSWJx_ZDd3tOUHKKh_jNQ-am0RtPwFfg9-T5BWkdJVgFGO_vpOSWcqzaKaG38PKdJRCe9CeurBDouKg2gc7RsfmpI09pv2lrwwjylGjIUyMEh2p5rabnFNCMk45woxtSO75HXhdnYQ';
    private refreshToken: string = 'AQABAAAAAAC5una0EUFgTIF8ElaxtWjTo2fKjLUw5AwBIk1xJIgPCypooYBU5x0ULzquZ3y0vYHLGtczKYLssMN6aXR-2GwYW3esWd0SEQiCKpB3l8upNlazzOsjZsvH61IqrOqPCjY_DDeQWIxpTW1HvFDjW7BWm0mI2fA9WVpYtMcWIhcLQXT6G722MmIdKqdzs6gHGf5S8qO41ussIMRQDLTOTILsoyk3Il_DX7LJWlOZ6dW6hFUnwhGZVIZr6MWBK3PyDMSfEwM22FfHSg4c422oFqUtv6gI8sl4kz6FIHA7S-w9shNA2_4YQHi5x-lQ_qvKkHbdD649nzmJ1w6pFveZ9lycpMd3ou3jelta9FGwG-p7hpE-F7PikaVqo2sBk0FAGUmyioVi1hYVnbWjbunsYLpN25jQNuv3Bz9Pv7jGRZ9m8-IWIxmMJbj3yBLNj_Lq8I0WSXiSv1c4CIykyXQoosGakVKSh2dtPtOqRh2LVcetsCI6Zj4BVPvj4MXHxRgnNe6-k4XS00I2TbVuOml7DTUJ_Ucy25SeMl0bd2N8UcSTzBxYXwPdgSRQ8-EbFr9gYzEBnL7dD3J8DbqvAozvVGj5XEOpbDl6hj4DlKkcxCEvksOHM7-DKPEox7T75rvbtTff0JZqfC8cY6Zo-VuXlkjr1PQodz4SBp16ODQLZSCMLd70ZA5VmrdpAa8RHQPn0SKdowwsRIWcpKNeTFQ2m1HOD1nYjD3ZvVjh1JOFGbXajGrNJK9UnA21fG2m759BqwxqeD4Nc8OTQF_ugpVzG_R5FfFKqqLFCmL1PGlJJ2ux1Q06qfQbVzqbA5kPrQNQVkMlMkqMT3D9OjOAj9EmCVAk3hfdRkaR4QVoNEWwPP5MAiYsvXFMkBf2PiWv67cYO187ux0DIaUviFADOHI1-OW-4PMRIxvGO9UWhCFGDF-Yct1ucP6L_sUF9cAE6Yy7m4cy9RoZ9ZIh2Yz622c-73AM5GdTLyEjfDF31rUBdwI8evi6d6SuOmM7K3yXOz8uLBMm1kaurkAmRVBO87t0w4rqGy5Yr8iMk2-ydJ-uLQhFRBtVn9-Ih8nr5nroO-WFp0NvEYsEFgmiHy8CG58C0h7EjlWzhOvRbBHXQpTcktEyudZ9cHt4TCtwwIpy0RP5ahTdU7vZD6tiodUTqnXN8mO5dqbPs3Wl88se25AOFHVRT2SIE6qcMHyAA2WNZFeM3bu8oSeJvZzqqC7xrkMMCL2ccbihpPnAbSNOHZzMtviBJ0irWzG8q6Ws-6PNeraMle2GXTIO5n_pvqCcG5NZoEGyO82WUstLroM-bUOVBMnKftOs_kihtctcqxBFllHmU7vk4KK8uDouMs4LeziNWQ_Xqj8JGSiGw8r21lM1suT1BnSETAQzbXIdoA6Pmm7cWnjPo-r5vmwX6UbZGfQaM4FoLp2C63IF8KVeJblu5WgOMyAA';
    private idToken: string = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiI2NWViNTYzYy1jODA5LTQ1ZWEtOTIzYi1mNmNmYjc1MWE1OTQiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC8yYzUwYTUyNy0wMmZmLTQ5MmItYmU4ZC05MDYwNTFmZGY1M2UvIiwiaWF0IjoxNTQzNjc3OTIyLCJuYmYiOjE1NDM2Nzc5MjIsImV4cCI6MTU0MzY4MTgyMiwiYW1yIjpbInB3ZCJdLCJlbWFpbCI6Im1rb3JkZWxha29zQGdtYWlsLmNvbSIsImZhbWlseV9uYW1lIjoiS29yZGVsYWtvcyIsImdpdmVuX25hbWUiOiJNaWNoYWlsIiwiaWRwIjoibGl2ZS5jb20iLCJpcGFkZHIiOiIxOTUuNzguODYuMTkwIiwibmFtZSI6Im1rb3JkZWxha29zIiwib2lkIjoiYjljZjlhNDMtMTVkZi00OGRlLTkxMzctMDUxZTBkZTJjZTZhIiwic3ViIjoibGs4SWlzOTNtODZOQXYzdkNJU2xITFlrWXlobGpyUDMwRGQzWk1HSHQ1ZyIsInRpZCI6IjJjNTBhNTI3LTAyZmYtNDkyYi1iZThkLTkwNjA1MWZkZjUzZSIsInVuaXF1ZV9uYW1lIjoibGl2ZS5jb20jbWtvcmRlbGFrb3NAZ21haWwuY29tIiwidmVyIjoiMS4wIn0';


    constructor( private http: Http ) { }

    public get( path: string ) : Observable<Response> {
        let authOptions = this.authOptions();
        let url = constants.API_ENDPOINT + path;
        return this.http.get( url , authOptions );
    }

    private authOptions(): RequestOptions {
        let headers = new Headers();
        headers.append('Authorization', `Bearer `+this.token );
        return new RequestOptions( {  headers: headers });
    }

    


}
