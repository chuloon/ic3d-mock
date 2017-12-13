import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorizontalNavComponent } from './horizontal-nav/horizontal-nav.component';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule
  ],
  declarations: [
    HorizontalNavComponent
  ],
  exports: [
    HorizontalNavComponent
  ]
})
export class SharedModule { }
