import { Component, OnInit } from "@angular/core";
import { BaseComponent } from "../../base/base.component";
import { NgxSpinnerService } from "ngx-spinner";
import { HttpClientService } from "src/app/services/common/http-client.service";

@Component({
  selector: "app-customers",
  templateUrl: "./customers.component.html",
  styleUrls: ["./customers.component.scss"],
})
export class CustomersComponent extends BaseComponent implements OnInit {
  constructor(
    spinner: NgxSpinnerService,
    private httpClient: HttpClientService
  ) {
    super(spinner);
  }

  // Example
  ngOnInit(): void {
    this.httpClient
      .get({ controller: "Products" })
      .subscribe((res) => console.log(res));
  }
}
