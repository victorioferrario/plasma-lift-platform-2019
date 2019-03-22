import { Component, OnInit } from '@angular/core';
import { AppViewContext, Page } from '@services';

@Component({
  selector: 'frm-contact',
  styleUrls: ['./contact.component.scss'],
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {
  constructor(public context: AppViewContext) {}
  ngOnInit() {
    this.context.form.onDisplayForm();
  }

  onContinue() {
    this.context.form.onDisplayForm();
  }
}
