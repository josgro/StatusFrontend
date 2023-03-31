import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { StatusComponent } from './status/status.component';
import { FilesComponent } from './files/files.component';
import { HttpClientModule } from '@angular/common/http';
import { DataTransferService } from './dataTransfer/data-transfer.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    StatusComponent,
    FilesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataTransferService],
  bootstrap: [AppComponent]
})
export class AppModule { }
