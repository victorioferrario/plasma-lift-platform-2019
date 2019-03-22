import { BehaviorSubject, Subscription } from 'rxjs';

export class DomHelper {
  subscription: Subscription;
  isLoading: BehaviorSubject<boolean>;
  showForm: BehaviorSubject<boolean>;
  showLoading: BehaviorSubject<boolean>;
  showMessage: BehaviorSubject<boolean>;
  showError: BehaviorSubject<boolean>;
  constructor() {
    this.onInit();
  }
  onInit() {
    this.showForm = new BehaviorSubject<boolean>(true);
    this.showForm.asObservable();
    //
    this.showLoading = new BehaviorSubject<boolean>(false);
    this.showLoading.asObservable();
    //
    this.showMessage = new BehaviorSubject<boolean>(false);
    this.showMessage.asObservable();
    //
    this.showError = new BehaviorSubject<boolean>(false);
    this.showError.asObservable();
  }
  onReset() {
    this.showError.next(false);
    this.showForm.next(false);
    this.showLoading.next(false);
    this.showMessage.next(false);
    return true;
  }
}
