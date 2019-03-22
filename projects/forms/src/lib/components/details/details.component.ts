import { Component, OnInit } from '@angular/core';
import { AppViewContext, Page } from '@services';
import { DomHelper } from '../dom-helper';
@Component({
  selector: 'frm-details',
  styleUrls: ['./details.component.scss'],
  templateUrl: './details.component.html'
})
export class DetailsComponent implements OnInit {
  constructor(public context: AppViewContext) {}
  ngOnInit() {
    // this.context.form.onDisplayMessage();
  }

  onContinue() {
    this.context.form.onDisplayForm();
    this.context.closeDialog();
  }
}
