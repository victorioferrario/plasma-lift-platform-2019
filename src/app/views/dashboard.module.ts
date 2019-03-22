import { NgModule } from '@angular/core';

/**
 * @type: LOCAL_COMPONENTS
 */
import { DashboardRoutingModule } from './dashboard/dashboard.routing.module';
import { DashboardComponent } from './dashboard/components/dashboard.component';

import {
  LayoutModule,
  FabricModule,
  MaterialModule,
  BannersModule
} from '@fabric';
import { FlexLayoutModule } from '@angular/flex-layout';
export const LOCAL_COMPONENTS = [DashboardComponent];
@NgModule({
  imports: [
    LayoutModule,
    FabricModule,
    MaterialModule,
    DashboardRoutingModule,
    BannersModule,
    FlexLayoutModule
  ],
  providers: [],
  declarations: [LOCAL_COMPONENTS],
  entryComponents: [],
  exports: [LOCAL_COMPONENTS]
})
export class DashboardModule {}
