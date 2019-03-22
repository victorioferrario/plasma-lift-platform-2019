import { Component, OnInit } from '@angular/core';
import { AppViewContext, Page } from '@services';
@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingProgramComponent implements OnInit {
  constructor(private context: AppViewContext) {}
  ngOnInit() {
    this.context.complete(Page.TrainingPrograms);
  }
  onClick() {
    this.context.openDialog();
  }
}
