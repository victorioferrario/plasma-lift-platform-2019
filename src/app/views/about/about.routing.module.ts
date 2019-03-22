import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/**
 * @description : local hook
 */
import { AboutComponent } from './components/about.component';

const routes: Routes = [
  {
    path: '',
    component: AboutComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule {}
