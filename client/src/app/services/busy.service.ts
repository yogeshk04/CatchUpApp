import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class BusyService {
  busyRequestCount = 0;

  constructor(private spinnerService: NgxSpinnerService) { }

  busy() {
    this.busyRequestCount++;
    this.spinnerService.show(undefined, {
      // type: 'line-scale-party',
      // bdColor: 'rgba(255,255,255,0)',
      // color: '#333333'
      bdColor: "rgba(51,51,51,0.5)",
      size: "large",
      color: "#2CDB63",
      type: "ball-scale-multiple"
    });
  }

  idle() {
    this.busyRequestCount--;
    if(this.busyRequestCount <= 0) {
      this.busyRequestCount = 0;
      this.spinnerService.hide();
    }
  }
}
