import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {EmailValidationService} from './email-validation.service';
import { EmailValidationListComponent } from './email-validation-list/email-validation-list.component';
import { EmailValidationComponent } from './email-validation/email-validation.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    EmailValidationListComponent,
    EmailValidationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    FormsModule
  ],
  providers: [EmailValidationService, EmailValidationListComponent, EmailValidationComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
