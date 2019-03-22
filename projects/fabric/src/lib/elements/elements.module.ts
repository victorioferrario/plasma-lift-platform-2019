import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InkBarComponent } from './';
import { ThemeDirective } from './banners/banner.directive';
export const ELEMENT_COMPONENTS = [InkBarComponent];

@NgModule({
  declarations: [ELEMENT_COMPONENTS],
  imports: [CommonModule],
  exports: [ELEMENT_COMPONENTS],
  providers: []
})
export class ElementsModule {}
