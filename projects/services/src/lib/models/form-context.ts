import { BehaviorSubject, Subscription } from 'rxjs';

export interface IFormContext {
  subscription: Subscription;
  showForm: BehaviorSubject<boolean>;
  showLoading: BehaviorSubject<boolean>;
  showMessage: BehaviorSubject<boolean>;
  showError: BehaviorSubject<boolean>;
  onReset(): boolean;
  onDisplayForm(): boolean;
  onDisplayLoading(): boolean;
  onDisplayMessage(): boolean;
}

export class FormContext implements IFormContext {
  subscription: Subscription;
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
  onReset(): boolean {
    this.showError.next(false);
    this.showForm.next(false);
    this.showLoading.next(false);
    this.showMessage.next(false);
    return true;
  }
  onDisplayForm() {
    if (this.onReset()) {
      this.showForm.next(true);
    }
    return true;
  }
  onDisplayLoading() {
    if (this.onReset()) {
      this.showLoading.next(true);
    }
    return true;
  }
  onDisplayMessage() {
    if (this.onReset()) {
      this.showMessage.next(true);
    }
    return true;
  }
}
