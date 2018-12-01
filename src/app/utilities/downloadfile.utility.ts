import { Injectable } from '@angular/core';
import { Constants } from '../constants';

@Injectable()
export class DownloadFileUtility {
     
    constructor(
        private constants: Constants
    ){}
     
    //To Use in future
    public selfWindow(downloadData): void {
        if (this.constants.IS_IE) {
            navigator.msSaveOrOpenBlob(downloadData.blob, downloadData.name);
        } else {
            let a = document.createElement('a');
            a.href = window.URL.createObjectURL(downloadData.blob);
            a.download = downloadData.name;
            document.body.appendChild(a);
            a.click();
            a.remove();
        }

    }
}