import { Injectable, EventEmitter, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

import {
  ScrollToService,
  ScrollToConfigOptions
} from '@nicky-lenaers/ngx-scroll-to';
import {
  Page,
  Load,
  EnumParse,
  PageState,
  IPageState,
  ViewContext,
  IFormContext,
  FormContext,
  INavContext,
  NavContext
} from './models';
import { Title } from '@angular/platform-browser';
export interface IAppViewContext {
  nav: INavContext;
  form: IFormContext;
  page: ViewContext;
  dispatch: EventEmitter<IPageState>;
  dispatchDialog: EventEmitter<boolean>;
  dispatchScroll: EventEmitter<boolean>;
  openDialog(): void;
  load(page: Page): void;
  complete(page: Page): void;
  scroll(): void;
}

@Injectable()
export class AppViewContext implements IAppViewContext {
  nav: INavContext;
  form: IFormContext;
  page: ViewContext;
  dispatch: EventEmitter<IPageState>;
  dispatchDialog: EventEmitter<boolean>;
  dispatchDialogClose: EventEmitter<boolean>;
  dispatchScroll: EventEmitter<boolean>;
  constructor(
    private router: Router,
    private titleService: Title,
    private scrollToService: ScrollToService
  ) {
    const self = this;
    self.nav = new NavContext();
    self.form = new FormContext();
    self.page = new ViewContext(router, titleService);
    self.dispatch = new EventEmitter();
    self.dispatchScroll = new EventEmitter();
    self.dispatchDialog = new EventEmitter();
    self.dispatchDialogClose = new EventEmitter();
  }
  public load(page: Page) {
    this.page.load(page);
    this.nav.update(EnumParse.GetPageIndex(page));
  }
  public complete(page: Page) {
    const self = this;
    self.page.complete(page);
    self.dispatch.emit(
      new PageState(
        Load.Complete,
        page,
        EnumParse.GetPageIndex(page),
        EnumParse.GetPageInkState(page)
      )
    );
  }
  public scroll() {
    const config: ScrollToConfigOptions = {
      target: 'destination',
      easing: 'easeInOutQuart'
    };
    this.scrollToService.scrollTo(config);
  }
  public openDialog() {
    this.dispatchDialog.emit(true);
  }
  public closeDialog() {
    this.dispatchDialogClose.emit(true);
  }
}
