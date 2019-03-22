import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MainComponent,
  HeaderComponent,
  ShellComponent,
  MenuLinkComponent,
  DialogComponent,
  ContentComponent,
  HeaderSocialLinksComponent
} from './';
import { MaterialModule } from '../theme/material.module';
import { ElementsModule } from '../elements/elements.module';
import { FormsModule } from '@forms';
export const LAYOUT_COMPONENTS = [
  MainComponent,
  HeaderComponent,
  ShellComponent,
  MenuLinkComponent,
  DialogComponent,
  ContentComponent,
  HeaderSocialLinksComponent
];

@NgModule({
  declarations: [LAYOUT_COMPONENTS],
  imports: [CommonModule, MaterialModule, ElementsModule, FormsModule],
  exports: [LAYOUT_COMPONENTS],
  entryComponents: [DialogComponent],
  providers: []
})
export class LayoutModule {}
