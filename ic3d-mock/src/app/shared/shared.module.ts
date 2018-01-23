import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorizontalNavComponent } from './horizontal-nav/horizontal-nav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { VerticalNavComponent } from './vertical-nav/vertical-nav.component';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarComponent } from 'ngx-perfect-scrollbar/dist/lib/perfect-scrollbar.component';

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    PerfectScrollbarModule
  ],
  declarations: [
    HorizontalNavComponent,
    VerticalNavComponent
  ],
  exports: [
    HorizontalNavComponent,
    VerticalNavComponent,
    PerfectScrollbarModule
  ]
})
export class SharedModule { }
