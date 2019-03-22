import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
/**
 * @type: LOCAL_COMPONENTS
export class TrainingProgramRoutingModule {}
 */
import { TrainingProgramRoutingModule } from './training-programs/training-programs.routing.module';
import { TrainingProgramComponent } from './training-programs/components/training.component';
import { DynamicStyleComponent } from './training-programs/components/dynamic-css.component';
import { LayoutModule, FabricModule, MaterialModule } from '@fabric';

export const LOCAL_COMPONENTS = [
  TrainingProgramComponent,
  DynamicStyleComponent
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    LayoutModule,
    FabricModule,
    MaterialModule,
    TrainingProgramRoutingModule
  ],
  providers: [],
  declarations: [LOCAL_COMPONENTS],
  entryComponents: [],
  exports: [LOCAL_COMPONENTS]
})
export class TrainingProgramsModule {}
