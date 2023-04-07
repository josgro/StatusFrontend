import { Component, ViewChild } from '@angular/core';
import { DataTransferService } from '../http/data-transfer.service';
import { NgForm } from '@angular/forms';
import { EmailStatus } from '../model/EmailStatus.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent {

  checked: boolean = false;

  email: string = '';
  status: string = '';
  errorMessage: string = '';
  @ViewChild('statusForm') statusForm: NgForm | undefined;

  constructor(private dataTransfer: DataTransferService) {
  }


  resetStatusForm(): void {
    this.checked = false;
    this.statusForm?.reset();
  }


  onCheckStatus(statusForm: NgForm) {
    console.log("Component");
    console.log(statusForm);
    console.log(statusForm.value);
    this.dataTransfer.checkStatus(statusForm.value).subscribe({
      next: (response: EmailStatus) => {
        this.email = response.email;
        this.status = response.status;
        this.checked = true;
        this.errorMessage = '';
      },
      error: (error: HttpErrorResponse) => {
        this.errorMessage = error.error.message;
      }
    });
  }

}
