import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreComponent } from './pages/core/core.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BenchmarkComponent } from './pages/benchmark/benchmark.component';
import { GoalTrackerComponent } from './pages/goal-tracker/goal-tracker.component';
import { StatementComponent } from './pages/statement/statement.component';

const routes: Routes = [
  {
    path: '',
    component: CoreComponent,
    children: [
      { path: '', component: LandingPageComponent },
      { path: 'login', component: LoginPageComponent },
      { path: 'signup', component: SignupPageComponent },
      // { path: '', component: DashboardComponent },
      // { path: 'stat', component: BenchmarkComponent },
      { path: 'goals', component: GoalTrackerComponent },
      { path: 'details/statement', component: StatementComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule {}
