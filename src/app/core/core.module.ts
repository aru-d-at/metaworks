import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './pages/core/core.component';
import { SharedModule } from '../shared/shared.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MaterialModule } from '../material/material.module';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { BenchmarkComponent } from './pages/benchmark/benchmark.component';
import { StatementComponent } from './pages/statement/statement.component';
import { GoalTrackerComponent } from './pages/goal-tracker/goal-tracker.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatSelectModule} from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';

import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    CoreComponent,
    LoginPageComponent,
    SignupPageComponent,
    LandingPageComponent,
    // BenchmarkComponent,
    StatementComponent,
    GoalTrackerComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule, CoreRoutingModule, SharedModule, MaterialModule,
    NgbModule,
    CarouselModule.forRoot(),
    AccordionModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ProgressbarModule.forRoot(),
    BsDropdownModule.forRoot(),
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatChipsModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatExpansionModule,
    NgxChartsModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ]
})
export class CoreModule {}
