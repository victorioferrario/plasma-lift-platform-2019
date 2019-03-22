import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/**
 * @description : local hook
 */
import { PlasmaDeviceComponent } from './components/plasma-device.component';

const routes: Routes = [
  {
    path: '',
    component: PlasmaDeviceComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlasmaDeviceRoutingModule {}
