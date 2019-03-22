import { Directive, ElementRef, Input, OnChanges } from '@angular/core';
import { BannerThemes, BannerType } from './banner';
@Directive({
  selector: '[fabTheme]'
})
export class ThemeDirective implements OnChanges {
  @Input('fabTheme') theme: BannerType;
  constructor(private el: ElementRef<HTMLElement>) {}
  ngOnChanges() {
    const item = this.getBannerTheme();
    Object.keys(item).forEach(prop => {
      this.el.nativeElement.style.setProperty(`--${prop}`, item[prop]);
    });
  }
  protected getBannerTheme() {
    switch (this.theme as string) {
      case 'BannerType.Banner01':
        return BannerThemes.themes.banner01;
      case 'BannerType.Banner02':
        return BannerThemes.themes.banner02;
      case 'BannerType.Banner03':
        return BannerThemes.themes.banner03;
      case 'BannerType.Banner04':
        return BannerThemes.themes.banner04;
      case 'BannerType.Banner05':
        return BannerThemes.themes.banner05;
      case 'BannerType.Banner06':
        return BannerThemes.themes.banner06;
    }
  }
}
