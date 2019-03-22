import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AppViewContext, Page } from '@services';
@Component({
  selector: 'fab-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
  displayTopButton: BehaviorSubject<boolean>;
  @ViewChild('scrollViewPort') scrollViewPort: ElementRef;
  constructor(public context: AppViewContext) {
    this.displayTopButton = new BehaviorSubject<boolean>(false);
    this.displayTopButton.asObservable();
  }
  ngOnInit() {}

  onScrollClick() {
    this.context.scroll();
  }
}
