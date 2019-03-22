import { Component, OnInit } from '@angular/core';
import { AppViewContext, Page } from '@services';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  // private context: AppViewContext;
  constructor(private context: AppViewContext) {}
  ngOnInit() {
    this.context.complete(Page.Contact);
  }
}
