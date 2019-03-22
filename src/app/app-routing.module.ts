import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    loadChildren: './views/dashboard.module#DashboardModule'
  },
  {
    path: 'about',
    loadChildren: './views/about.module#AboutModule'
  },
  {
    path: 'contact',
    loadChildren: './views/contact.module#ContactModule'
  },
  {
    path: 'plasma-device',
    loadChildren: './views/plasma-device.module#PlasmaDeviceModule'
  },
  {
    path: 'training-programs',
    loadChildren: './views/training-programs.module#TrainingProgramsModule'
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'reload',
      initialNavigation: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
