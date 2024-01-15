import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LayoutModule } from "./layout/layout.module";
import { ComponentsModule } from "./components/components.module";
import { BaseComponent } from "./base/base.component";
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [],
  imports: [CommonModule, LayoutModule, ComponentsModule],
  exports: [LayoutModule],
})
export class AdminModule {}
