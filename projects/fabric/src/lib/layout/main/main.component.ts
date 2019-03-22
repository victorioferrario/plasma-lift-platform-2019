import { BehaviorSubject } from 'rxjs';
import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  HostListener
} from '@angular/core';
import { AppViewContext, Page } from '@services';

@Component({
  selector: 'fab-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  hasScrollTopButton: BehaviorSubject<boolean>;
  constructor(private el: ElementRef, public context: AppViewContext) {
    this.scrollContent = el;
    console.log(this.scrollContent);
  }
  scrollContent: ElementRef;
  @ViewChild('scrollViewPort')
  scrollViewPort: any;

  @ViewChild('footerElement')
  footerElement: any;
  pageContainer;

  ngOnInit() {
    this.hasScrollTopButton = new BehaviorSubject<boolean>(false);
    this.hasScrollTopButton.asObservable();
    console.log(this.footerElement);
    this.initProps();
  }
  onClick(arg: string) {
    const self = this,
      val = Number(arg);

    if (val === 1) {
    }
    switch (val) {
      case 1:
        this.handleNavigationBar(Page.Home, 'Welcome');
        break;
      case 2:
        this.handleNavigationBar(Page.About, 'About');
        break;
      case 4:
        this.handleNavigationBar(Page.Faq, 'Faq');
        break;
      case 3:
        this.handleNavigationBar(Page.Contact, 'Contact');
        break;
      case 5:
        this.handleNavigationBar(Page.TrainingPrograms, 'TrainingPrograms');
        break;
      case 6:
        this.handleNavigationBar(Page.PlasmaDevice, 'Plasma Device');
        break;
    }
  }

  @HostListener('scroll', ['$event.target'])
  onScrollEvent(evt: any) {
    console.log('evt', evt);
  }
  protected handleNavigationBar(page: Page, title: string) {
    const self = this;
    self.context.scroll();
    self.context.load(page);
    self.context.page.updateSideNav(false);
  }
  protected initProps() {
    const self = this;
    return true;
  }

  onScroll() {
    if (this.scrollViewPort.elementRef.nativeElement.scrollTop > 300) {
      if (!this.hasScrollTopButton.value) {
        this.hasScrollTopButton.next(true);
      }
    } else {
      if (this.hasScrollTopButton.value) {
        this.hasScrollTopButton.next(false);
      }
    }
  }
}
