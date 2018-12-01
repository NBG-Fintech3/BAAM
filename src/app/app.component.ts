import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api-service/api.service';

@Component({
    selector: 'baam-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'baam';

    constructor( ) {

    }

    ngOnInit() { }

}
