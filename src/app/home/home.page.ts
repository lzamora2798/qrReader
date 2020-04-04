import {BarcodeScanner} from '@ionic-native/barcode-scanner/ngx';
import {ToastController} from '@ionic/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  qrData =  'https://ionicacademy.com/';
  scannedCode = null;
  elementTyp: 'url'| 'canvas'| 'img' ='canvas';
  constructor(private barcodeScanner: BarcodeScanner,
    private toasCtrl:ToastController) {}
  scanCode(){
    this.barcodeScanner.scan().then(
      barcodeData => {
        this.scannedCode = barcodeData.text;
      }
    )

  }
}  
