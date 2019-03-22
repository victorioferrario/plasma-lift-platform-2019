import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { AppViewContext, Page } from '@services';
@Component({
  selector: 'fab-content',
  template: `
    <ng-container> <ng-content></ng-content> </ng-container>
  `
})
export class ContentComponent implements OnInit {
  scrollContent: ElementRef;
  isScrollMarkerSet = false;
  constructor(private el: ElementRef, public appContext: AppViewContext) {
    console.log(el);
  }

  ngOnInit() {}

  @HostListener('scroll', ['$event.target'])
  onScrollEvent(evt: any) {
    console.log('scroll', evt);
    // console.log(evt, this.el.nativeElement, this.scrollContent.nativeElement);
    const y = this.scrollContent.nativeElement.scrollTop;
    if (y > 200) {
      if (!this.isScrollMarkerSet) {
        this.isScrollMarkerSet = true;
        this.appContext.dispatchScroll.emit(true);
      }
    }
    if (y < 200) {
      if (this.isScrollMarkerSet) {
        this.isScrollMarkerSet = false;
        this.appContext.dispatchScroll.emit(false);
      }
    }
  }
}
