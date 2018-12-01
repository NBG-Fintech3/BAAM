import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

declare const BotChat: any; // to avoid typescript syntax issues

@Component({
    selector: 'baam-bot-page',
    templateUrl: './bot-page.component.html'
})
export class BotPageComponent implements OnInit {

    @ViewChild('myloader') myloader: ElementRef; 
    public links = [] ; // empty

    constructor() { }

    ngOnInit() {

    }
    ngAfterViewInit() {
        this.loadBot();
    }

    loadBot() {
        setTimeout(() => {
            this.myloader.nativeElement.classList.add('hide-me');  
            setTimeout(() => {
                this.myloader.nativeElement.setAttribute('hidden', 'true');
                
                const user = {
                    id: '_' + Math.random().toString(36).substr(2, 9),
                    name: 'You'
                };
        
                const botConnection = new BotChat.DirectLine({
                    secret: 'IvSV8omrOSA.cwA.MCM.FN6tG5VI5PkDdYOfPGrFjoxop-LPUcHCELEkHzfG0Jk',
                    user
                });
        
                BotChat.App({
                    botConnection,
                    user,
                    bot: { id: '5ed18033-8c6b-43ed-b707-04496ffdc88d' },
                    resize: 'detect'
                }, document.getElementById("bot"));
        
                // send first dialog event
                botConnection
                    .postActivity({
                        from: user,
                        name: 'requestWelcomeDialog',
                        type: 'event',
                        value: ''
                    })
                    .subscribe(function (id) {
                        console.log('"trigger requestWelcomeDialog" sent', this.showLoader);
                    });
                // // send information about the channel
                // botConnection
                //   .postActivity({type: "event", value: "", from: {id: "me" }, name: "chatInit"})
                //   .subscribe(id => console.log("success"));
        
            }, 1000 );      
        }, 3000 );
    }

}
