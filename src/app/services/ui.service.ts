import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn:'root'
})
export class UiService{
  loadingCount = 0;
  loading = new Subject<number>();

  showLoading(){
    this.loading.next(++this.loadingCount);
  }
  hideLoading(){
    this.loading.next(--this.loadingCount);
  }
}
