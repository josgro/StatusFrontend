import { HttpErrorResponse, HttpEvent } from '@angular/common/http';
import { Component } from '@angular/core';
import { DataTransferService } from '../dataTransfer/data-transfer.service';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent {

  constructor(private dataTransfer: DataTransferService) { }

  fileTypes: string[] = [];


  onUploadFile(file: File): void {
    const formData = new FormData();
    formData.append('file', file, file.name);
    this.dataTransfer.upload(formData).subscribe(
      event => {
        console.log(event);
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );
  }


  onDownloadFile(fileType: string): void {
    this.dataTransfer.download(fileType).subscribe(
      event => {
        console.log(event);
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }



}
