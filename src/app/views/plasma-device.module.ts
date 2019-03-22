import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
/**
 * @type: LOCAL_COMPONENTS
export class TrainingProgramRoutingModule {}
 */
import { PlasmaDeviceRoutingModule } from './plasma-device/plasma-device.routing.module';
import { PlasmaDeviceComponent } from './plasma-device/components/plasma-device.component';
import { TipsComponent } from './plasma-device/components/tips.component';
import { LayoutModule, FabricModule, MaterialModule } from '@fabric';
import { FlexLayoutModule } from '@angular/flex-layout';

export const LOCAL_COMPONENTS = [PlasmaDeviceComponent, TipsComponent];
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    LayoutModule,
    FabricModule,
    MaterialModule,
    FlexLayoutModule,
    PlasmaDeviceRoutingModule
  ],
  providers: [],
  declarations: [LOCAL_COMPONENTS],
  entryComponents: [],
  exports: [LOCAL_COMPONENTS]
})
export class PlasmaDeviceModule {}
