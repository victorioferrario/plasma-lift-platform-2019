import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/**
 * @description : local hook
 */
import { TrainingProgramComponent } from './components/training.component';

const routes: Routes = [
  {
    path: '',
    component: TrainingProgramComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingProgramRoutingModule {}
