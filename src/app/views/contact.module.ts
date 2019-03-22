import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
/**
 * @type: LOCAL_COMPONENTS
 */
import { ContactRoutingModule } from './contact/contact.routing.module';
import { ContactComponent } from './contact/components/contact.component';
// import { FormComponent } from './contact/components/form.component';

import { LayoutModule, FabricModule, MaterialModule } from '@fabric';
import { FormsModule } from '@forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpMessagingClient } from '@services';
export const LOCAL_COMPONENTS = [ContactComponent];
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    LayoutModule,
    FabricModule,
    MaterialModule,
    FormsModule,
    ContactRoutingModule,
    FlexLayoutModule
  ],
  providers: [HttpMessagingClient],
  declarations: [LOCAL_COMPONENTS],
  entryComponents: [],
  exports: [LOCAL_COMPONENTS]
})
export class ContactModule {}
