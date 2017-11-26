import { Component } from '@angular/core';
import { InAppBrowser , InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { Platform} from 'ionic-angular';


@Component({
selector: 'page-home',
templateUrl: 'home.html'
})
export class HomePage {
    
options : InAppBrowserOptions = {
    location : 'no',//Or 'no' 
    hidden : 'yes', //Or  'yes'
    zoom : 'no',//Android only ,shows browser zoom controls 
    hardwareback : 'no',
    mediaPlaybackRequiresUserAction : 'no',
    shouldPauseOnSuspend : 'no', //Android only 
    closebuttoncaption : 'Close', //iOS only
    disallowoverscroll : 'no', //iOS only 
    toolbar : 'yes', //iOS only 
    enableViewportScale : 'no', //iOS only 
    allowInlineMediaPlayback : 'no',//iOS only 
    presentationstyle : 'pagesheet',//iOS only 
    fullscreen : 'yes',//Windows only    
};
constructor(private iab: InAppBrowser,public platform: Platform) {
    
    platform.ready().then(() => {
        let browser = this.iab.create('https://www.yotube.com/','_blank',this.options);
       
        browser.show();
       
        
      });
}


}