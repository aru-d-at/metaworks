import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavdrawerComponent } from './components/navdrawer/navdrawer.component';

@NgModule({
  declarations: [FooterComponent, NavbarComponent, NavdrawerComponent],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [FooterComponent, NavbarComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {}
