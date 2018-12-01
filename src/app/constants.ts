import { Injectable } from '@angular/core';

@Injectable()
export class Constants {
 
    IS_IE: boolean;
    
    constructor() {
        this.IS_IE = (<any>document).documentMode || /Edge/.test(navigator.userAgent);
       
    }
}