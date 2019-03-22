import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberOnlyDirective } from './directives/number-only.directive';
import { MaterialModule } from './material.module';
import {
  ContactComponent,
  ContactFormComponent,
  DetailsComponent,
  DetailsFormComponent
} from './components';

export const COMPONENTS = [
  ContactComponent,
  ContactFormComponent,
  DetailsComponent,
  DetailsFormComponent
];
@NgModule({
  declarations: [COMPONENTS, NumberOnlyDirective],
  imports: [CommonModule, MaterialModule],
  exports: [NumberOnlyDirective, COMPONENTS],
  entryComponents: [DetailsComponent]
})
export class FormsModule {}
