import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopPageComponent } from './shop-page/shop-page.component';
import { SharedModule } from '../shared/shared.module';
import { ProductComponent } from './product/product.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [ShopPageComponent, ProductComponent]
})
export class ShopModule { }
