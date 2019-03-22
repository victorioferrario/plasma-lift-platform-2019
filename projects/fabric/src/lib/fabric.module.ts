import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './theme/material.module';
import { LayoutModule } from './layout/layout.module';
import { BannersModule } from './elements/banners/banners.module';
import { ElementsModule } from './elements/elements.module';
import { ThemeDirective } from './elements/banners/banner.directive';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    LayoutModule,
    ElementsModule,
    BannersModule
  ],
  exports: [MaterialModule, LayoutModule, ElementsModule, BannersModule]
})
export class FabricModule {}
