import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RouteOneComponent } from './components/route-one/route-one.component';
import { RouteTwoComponent } from './components/route-two/route-two.component';

const routes: Routes = [
	{ path: 'app2', redirectTo: '/app2/one', pathMatch: 'full'},
	{ path: 'app2/one', component: RouteOneComponent },
	{ path: 'app2/two', component: RouteTwoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
