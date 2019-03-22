import {
  Component,
  OnInit,
  OnDestroy,
  Output,
  ViewChild,
  ElementRef
} from '@angular/core';
import { AppViewContext, Page, HttpMessagingClient, IMessage } from '@services';
// import { FormHelper } from './form-helper';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  FormGroupDirective,
  NgForm
} from '@angular/forms';

@Component({
  selector: 'frm-contact-form',
  styleUrls: ['./contact-form.component.scss'],
  templateUrl: './contact-form.component.html'
})
export class ContactFormComponent implements OnInit, OnDestroy {
  constructor(
    fb: FormBuilder,
    public context: AppViewContext,
    public messagebus: HttpMessagingClient
  ) {}
  validateForm: FormGroup;
  txtEmail = new FormControl('', [Validators.email, Validators.required]);
  txtFullName = new FormControl('', [Validators.required]);
  txtMobileNumber = new FormControl('', [Validators.required]);
  txtMessage = new FormControl('', [Validators.required]);

  submitForm;
  ngOnInit() {
    const self = this;
    self.validateForm = new FormGroup({
      email: self.txtEmail,
      message: self.txtMessage,
      fullName: self.txtFullName,
      mobileNumber: self.txtMobileNumber
    });
  }
  ngOnDestroy(): void {}
  onSubmit() {
    if (this.validateForm.valid) {
      if (this.context.form.onDisplayLoading()) {
        const message: IMessage = {
          email: this.txtEmail.value,
          name: this.txtFullName.value,
          mobile: this.txtMobileNumber.value,
          message: this.txtMessage.value
        };
        this.messagebus.post(message).subscribe((event: any) => {
          console.log(event);
          this.context.form.onDisplayMessage();
        });
      }
    }
  }
  onCancel() {
    const self = this;
    this.validateForm.reset();
    this.txtEmail.markAsPristine({ onlySelf: false });
    this.txtEmail.updateValueAndValidity();
    this.txtMessage.updateValueAndValidity();
  }
}
