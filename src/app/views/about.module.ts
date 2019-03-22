import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
/**
 * @type: LOCAL_COMPONENTS
 */
import { AboutRoutingModule } from './about/about.routing.module';
import { AboutComponent } from './about/components/about.component';
import { PlasmaInfoComponent } from './about/components/info.component';
import { LayoutModule, FabricModule, MaterialModule } from '@fabric';
import { FlexLayoutModule } from '@angular/flex-layout';
export const LOCAL_COMPONENTS = [AboutComponent, PlasmaInfoComponent];
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    LayoutModule,
    FabricModule,
    MaterialModule,
    AboutRoutingModule,
    FlexLayoutModule
  ],
  providers: [],
  declarations: [LOCAL_COMPONENTS],
  entryComponents: [],
  exports: [LOCAL_COMPONENTS]
})
export class AboutModule {}
