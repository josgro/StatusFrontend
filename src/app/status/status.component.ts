import { Component } from '@angular/core';
import { DataTransferService } from '../dataTransfer/data-transfer.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent {

  constructor(private dataTransfer: DataTransferService) { }



}
