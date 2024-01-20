import { Component, OnInit } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { BaseComponent } from "src/app/admin/base/base.component";
import { CreateProduct } from "src/app/contracts/createProduct";
import {
  CustomToastrService,
  ToastrMessageType,
  ToastrOptions,
  ToastrPositionClass,
} from "src/app/services/common/customToastr.service";
import { ProductService } from "src/app/services/common/models/product.service";
import { SpinnerNameType } from "src/app/shared/enums/SpinnerNameType";

@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.scss"],
})
export class CreateComponent extends BaseComponent implements OnInit {
  constructor(
    spinner: NgxSpinnerService,
    private productService: ProductService,
    private toastr: CustomToastrService
  ) {
    super(spinner);
  }

  ngOnInit(): void {}

  create(
    name: HTMLInputElement,
    stock: HTMLInputElement,
    price: HTMLInputElement
  ) {
    this.showSpinner(SpinnerNameType.BallAtom);
    const createProduct: CreateProduct = new CreateProduct();
    createProduct.name = name.value;
    createProduct.stock = parseInt(stock.value);
    createProduct.price = parseFloat(price.value);

    this.productService.create(createProduct, () => {
      this.toastr.message("Ürün başarıyla eklendi", "Tamamlandı", {
        messageType: ToastrMessageType.Success,
        position: ToastrPositionClass.TopRight,
      });
      this.hideSpinner(SpinnerNameType.BallAtom);
    });
  }
}
