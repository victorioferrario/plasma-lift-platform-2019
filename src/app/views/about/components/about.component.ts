import { Component, OnInit } from '@angular/core';
import { AppViewContext, Page } from '@services';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  constructor(private context: AppViewContext) {}
  ngOnInit() {
    this.context.complete(Page.About);
  }
}
