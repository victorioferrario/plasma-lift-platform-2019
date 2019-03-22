import { Component, OnInit } from '@angular/core';
import { AppViewContext, Page } from '@services';
@Component({
  selector: 'app-training',
  templateUrl: './plasma-device.component.html',
  styleUrls: ['./plasma-device.component.scss']
})
export class PlasmaDeviceComponent implements OnInit {
  constructor(private context: AppViewContext) {}
  ngOnInit() {
    this.context.complete(Page.PlasmaDevice);
  }
}
