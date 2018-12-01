import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'baam-admin-dashboard',
    templateUrl: './admin-dashboard.component.html',
    styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

    public users = [
        { firstName: 'John', lastName: 'Doe' },
        { firstName: 'John', lastName: 'Doe' },
        { firstName: 'John', lastName: 'Doe' },
        { firstName: 'John', lastName: 'Doe' },
        { firstName: 'John', lastName: 'Doe' },
        { firstName: 'John', lastName: 'Doe' },
    ]


    constructor(private router: Router) { }

    ngOnInit() {
    }

}
