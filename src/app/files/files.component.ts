import { HttpClient, HttpErrorResponse, HttpEvent, HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { saveAs as importedSaveAs } from 'file-saver';
import { DataTransferService } from '../http/data-transfer.service';
import { Observable } from 'rxjs/';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent {

  fileName: string = '';
  fileTypes: string[] = [];
  fileUploaded: boolean = false;
  errorMessage: string = '';


  constructor(private dataTransfer: DataTransferService) { }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.fileName = file.name;
      const formData = new FormData();
      formData.append("file", file);


      this.dataTransfer.upload(formData).subscribe({
        next: (response: string[]) => {
          this.fileTypes = response;
          this.fileUploaded = true;
          this.errorMessage = '';
        },
        error: (error: HttpErrorResponse) => {
          this.errorMessage = error.error.message;
        }
      });
    }
  }

  onDownload(type: string) {
    this.fileName = `file.${type}`;
    this.dataTransfer.download(type).subscribe(
      blob => {
        importedSaveAs(blob, this.fileName);
      });
  }







}
