import { NgxSpinnerService } from "ngx-spinner";
import { SpinnerNameType } from "src/app/shared/enums/SpinnerNameType";

export class BaseComponent {
  constructor(private spinner: NgxSpinnerService) {}
  showSpinner(spinnerNameType: SpinnerNameType) {
    this.spinner.show(spinnerNameType);
  }
  hideSpinner(spinnerNameType: SpinnerNameType) {
    this.spinner.hide(spinnerNameType);
  }
}
