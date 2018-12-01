import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'baam-entire-page-loader',
    templateUrl: './entire-page-loader.component.html'
})
export class EntirePageLoaderComponent implements OnInit {

    @Input() loadingMessage: string;

    constructor() { }

    ngOnInit() {
    }

}
