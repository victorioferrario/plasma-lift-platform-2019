import {
  BannerTypedTheme,
  BannerTheme,
  BannerType,
  BannerThemes
} from './banner';
import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'fab-banner',
  template: `
    <ng-container
      ><div class="container fadeIn animated-image" [fabTheme]="BannerType">
        <ng-content></ng-content></div
    ></ng-container>
  `,
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  @Input() BannerType: BannerType;

  constructor() {}
  ngOnInit() {}
}
