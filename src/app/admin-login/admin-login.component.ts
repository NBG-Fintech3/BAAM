import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'baam-admin-login',
    templateUrl: './admin-login.component.html',
    styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

    public loginForm = new FormGroup({
        userName: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required),
    });

    constructor(private router: Router) { }

    ngOnInit() {
        console.log('hello admin login component');
    }


    public onSubmit() { 
        this.router.navigateByUrl('/admin');
    }

}
