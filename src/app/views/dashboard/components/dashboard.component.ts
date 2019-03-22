import { Component, OnInit } from '@angular/core';
// import { AppViewContext, Page } from '@services';
import { AppViewContext, Page } from '@services';
import { BannerThemes, BannerType } from '@fabric';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(private context: AppViewContext) {}
  selectedThemes = {
    banner01: BannerThemes.themes.banner01,
    banner02: BannerThemes.themes.banner02
  };
  onClick() {
    this.context.openDialog();
  }
  ngOnInit() {
    this.context.complete(Page.Home);
  }
}
// private context: AppViewContext
