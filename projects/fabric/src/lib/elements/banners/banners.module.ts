import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BannerComponent } from './banner.component';
import { ThemeDirective } from './banner.directive';
export const BANNER_COMPONENTS = [BannerComponent];

@NgModule({
  declarations: [BANNER_COMPONENTS, ThemeDirective],
  imports: [CommonModule],
  exports: [BANNER_COMPONENTS, ThemeDirective],
  providers: []
})
export class BannersModule {}
