import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { IUrlItem } from './IUrlItem';
import { Title } from '@angular/platform-browser';
import { Page, PageIndex, EnumParse } from './enums';
export class ViewContext {
  view: BehaviorSubject<Page>;

  sideNavIsOpen: boolean;
  viewIndex: BehaviorSubject<PageIndex>;
  viewLoaded: BehaviorSubject<Page>;
  list: IUrlItem[] = [
    { path: '', title: '' },
    { path: '/', title: 'Welcome: Plasma Lift Academy' },
    { path: 'about', title: 'About Us' },
    { path: 'contact', title: 'Get in touch!' },
    { path: 'getstarted', title: 'Get Started' },
    { path: 'training-programs', title: 'Training Programs' },
    { path: 'plasma-device', title: 'Plasma Device' }
  ];
  constructor(private router: Router, private titleService: Title) {
    const self = this;
    //
    self.view = new BehaviorSubject<Page>(Page.Home);
    self.view.asObservable();
    //
    self.viewIndex = new BehaviorSubject<PageIndex>(PageIndex.Home);
    self.viewIndex.asObservable();
    //
    self.viewLoaded = new BehaviorSubject<Page>(Page.None);
    self.viewLoaded.asObservable();
    //
    self.sideNavIsOpen = false;
  }
  public load(page: Page) {
    this.view.next(page);
    this.viewIndex.next(EnumParse.GetPageIndex(page));
    this.titleService.setTitle(this.list[this.viewIndex.getValue()].title);
    this.router.navigate([this.list[this.viewIndex.getValue()].path]);
  }
  public complete(page: Page) {
    this.viewLoaded.next(page);
  }
  public setTitle(index: number) {
    this.titleService.setTitle(this.list[index].title);
  }
  public updateSideNav(state: boolean) {
    this.sideNavIsOpen = state;
  }
}
