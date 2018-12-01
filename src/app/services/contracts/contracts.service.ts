import { Injectable, OnInit } from '@angular/core';

import * as Web3 from 'web3';

declare const require: any;
declare const window: any;

const tokenAbi = require('./tokenContract.json');

@Injectable()
export class ContractsService implements OnInit {

    // How to connect angular app to blockchain:
    // https://blog.fundrequest.io/calling-your-first-smart-contract-function-with-web3-and-angular5-aa1bde26a55c

    private _account: string = null;
    private _web3: any;

    private _tokenContract: any;
    private _tokenContractAddress: string = '0x03e6db8387b7a0d7f368978d71abc15576fd6525';


    constructor() {

        if (typeof window.web3 !== 'undefined') {
            // Use Mist/MetaMask's provider
            this._web3 = new Web3(window.web3.currentProvider);

            if (this._web3.version.network !== '4') {
                alert('Please connect to the Rinkeby network');
            }

        } else {
            console.warn(
                'Please use a dapp browser like mist or MetaMask plugin for chrome'
            );
        }
        
        // Establish connection: 
        // this._tokenContract = this._web3.eth.contract(tokenAbi).at(this._tokenContractAddress);
        // this.afterEstablishingConnection();
    }
    
    ngOnInit() {
        console.log('hello contracts service');
    }

    private afterEstablishingConnection() {
        console.log('in afterEstablishingConnection');

        // TODO: Do blochchain stuff :P 
        this._web3.eth.defaultAccount = this._web3.eth.accounts[0];
    }


    // Methods for components to use 
    public getDefaultAccount() {
        return this._web3.eth.defaultAccount;
    }

    public test() {
        return this._tokenContract.getReply();
    }

}
