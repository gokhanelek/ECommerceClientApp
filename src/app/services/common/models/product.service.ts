import { Injectable } from "@angular/core";
import { HttpClientService } from "../http-client.service";
import { CreateProduct } from "src/app/contracts/createProduct";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  constructor(private httpClient: HttpClientService) {}

  create(product: CreateProduct, successCallBack?: any) {
    this.httpClient
      .post(
        {
          controller: "products",
        },
        product
      )
      .subscribe(() => {
        if (successCallBack) successCallBack();
      });
  }
}
