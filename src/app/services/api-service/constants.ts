export class Constants {
    API_ENDPOINT: string;
    APP_NAME: string;
    ANGULAR_APP: string;
    ORCHARD_DATA: string;
    PARTNERS: string[];
    IS_IE: boolean;
    DOMAIN: string;
    testIp: string;

    constructor() {
        this.APP_NAME = 'BAAM';
        this.API_ENDPOINT = 'https://baamchain-4xxkmx-api.azurewebsites.net/api/v1/';

        this.ANGULAR_APP = '/my-baam#/';

        // this.API_ENDPOINT = 'http://10.16.1.22/CRMAuthenticationAPI/api'; // local
        // this.DOMAIN = 'http://websieben.trafficmanager.net:10016';
        // this.testIp = 'http://10.16.5.121/api';
    }
}