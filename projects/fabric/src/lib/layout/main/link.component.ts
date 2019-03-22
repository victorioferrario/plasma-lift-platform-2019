import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'fab-menu-link',
  styleUrls: ['./link.scss'],
  template: `
    <a
      mat-list-item
      class="list-button"
      href="javascript:void(0);"
      (click)="this.onClick()"
    >
      <span class="{{this.css }}"><ng-content></ng-content></span>
      <span class="ink-vertical {{this.css}}-ink"></span>
    </a>
  `
})
export class MenuLinkComponent implements OnInit {
  @Input() css: string;
  @Input() index: number;
  @Output() childEvent = new EventEmitter();
  constructor() {}
  ngOnInit() {}
  onClick() {
    this.childEvent.emit(this.index);
  }
}
