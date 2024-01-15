import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductsModule } from "./products/products.module";
import { BasketsModule } from "./baskets/baskets.module";
import { HomeModule } from "./home/home.module";
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeModule,
    ProductsModule,
    BasketsModule,
    NgxSpinnerModule,
  ],
})
export class ComponentsModule {}
