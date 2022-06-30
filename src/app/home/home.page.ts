import { Component } from '@angular/core';
import {
  BarcodeScanner,
  BarcodeScannerOptions,
} from '@awesome-cordova-plugins/barcode-scanner/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  encodedData: any;
  scannedBarCode: {};
  barcodeScannerOptions: BarcodeScannerOptions;

  constructor(private scanner: BarcodeScanner) {
    this.encodedData = 'Ionic is fun';
    this.barcodeScannerOptions = {
      showTorchButton: true,
      showFlipCameraButton: true,
    };
  }

  // membuka camera untuk melakukan scanning
  scanningBarcode() {
    this.scanner
      .scan()
      .then((res) => {
        this.scannedBarCode = res;
      })
      .catch((error) => {
        alert('Error: ' + error);
      });
  }

  // membuat kode barcode
  generateBarcode() {
    this.scanner
      .encode(this.scanner.Encode.TEXT_TYPE, this.encodedData)
      .then((res) => {
        alert(res);
        this.encodedData = res;
      })
      .catch((error) => {
        alert(error);
      });
  }
}
