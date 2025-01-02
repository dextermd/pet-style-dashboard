import { ToastrService } from 'ngx-toastr';
import {inject, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MyToastrService {
  toastr = inject(ToastrService);

  constructor() {}

  showSuccess(message?: string, title?: string) {
    this.toastr.success(title, message);
  }

  showError(message?: string, title?: string) {
    this.toastr.error(title, message);
  }

  showInfo(message?: string, title?: string) {
    this.toastr.info(title, message);
  }

  showWarning(message?: string, title?: string) {
    this.toastr.warning(title, message);
  }

  showCustom(message?: string, title?: string) {
    this.toastr.show(title, message);
  }

  clear() {
    this.toastr.clear();
  }

}
