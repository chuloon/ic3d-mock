import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorizontalNavComponent } from './horizontal-nav/horizontal-nav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { VerticalNavComponent } from './vertical-nav/vertical-nav.component';

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule
  ],
  declarations: [
    HorizontalNavComponent,
    VerticalNavComponent
  ],
  exports: [
    HorizontalNavComponent,
    VerticalNavComponent
  ]
})
export class SharedModule { }
