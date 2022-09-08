import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './features-modules/auth/auth.module';
const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  {
      path: "dashboard",
      loadChildren: () => import('./features-modules/dashboard/dashboard.module').then(m => m.DashBoardModule)
      // canActivate: [AuthGuard]
  },
  {
      path: "*",
      redirectTo: 'auth'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes), AuthModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
