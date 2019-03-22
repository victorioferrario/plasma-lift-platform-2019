import {
  Component,
  OnInit,
  OnDestroy,
  Output,
  ViewChild,
  ElementRef
} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
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
  selector: 'frm-details-form',
  styleUrls: ['./details-form.component.scss'],
  templateUrl: './details-form.component.html'
})
export class DetailsFormComponent implements OnInit, OnDestroy {
  constructor(
    fb: FormBuilder,
    public context: AppViewContext,
    public messagebus: HttpMessagingClient,
    public dialogRef: MatDialogRef<DetailsFormComponent>
  ) {}
  validateForm: FormGroup;
  txtEmail = new FormControl('', [Validators.email, Validators.required]);
  txtFullName = new FormControl('', [Validators.required]);
  txtMobileNumber = new FormControl('', [Validators.required]);

  submitForm;
  ngOnInit() {
    const self = this;
    self.validateForm = new FormGroup({
      email: self.txtEmail,
      fullName: self.txtFullName,
      mobileNumber: self.txtMobileNumber
    });
    self.context.dispatchDialogClose.subscribe((arg: any) => {
      self.dialogRef.close();
    });
  }
  ngOnDestroy(): void {}
  onSubmit() {
    console.log(this.validateForm.valid);
    if (this.validateForm.valid) {
      if (this.context.form.onDisplayLoading()) {
        const message: IMessage = {
          email: this.txtEmail.value,
          name: this.txtFullName.value,
          mobile: this.txtMobileNumber.value
        };
        this.messagebus.programDetails(message).subscribe((event: any) => {
          this.context.form.onDisplayMessage();
        });
      }
    } else {
      //  this.dialogRef.close();
    }
  }
  onCancel() {
    const self = this;
    this.validateForm.reset();
    this.txtEmail.markAsPristine({ onlySelf: false });
    this.txtEmail.updateValueAndValidity();
    this.context.form.onDisplayForm();
    this.dialogRef.close();
  }
}
