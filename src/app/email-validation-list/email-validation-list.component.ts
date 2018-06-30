import { Component, OnInit } from '@angular/core';
import { EmailValidationService} from '../email-validation.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-email-validation-list',
  templateUrl: './email-validation-list.component.html',
  styleUrls: ['./email-validation-list.component.css']
})
export class EmailValidationListComponent implements OnInit {
  emailValidations: EmailValidationResponse;
  actualPage: number;

  constructor(private emailService: EmailValidationService) {
   this.actualPage = 1;
  }

  ngOnInit() {
    this.emailService.getAll(0).subscribe(data => {
      this.emailValidations = data;
      console.log(this.emailValidations);
      this.actualPage = 1;
    });
  }

  getNextPage() {
    if (this.actualPage  < this.emailValidations.totalPages) {
      this.emailService.getAll(this.emailValidations.actualPage + 1).subscribe(data => {
        this.emailValidations = data;
        this.actualPage++;
        console.log(this.emailValidations);
      });
    }
  }

  getPreviousPage() {
    if (this.actualPage > 1) {
      this.emailService.getAll(this.emailValidations.actualPage - 1).subscribe(data => {
        this.emailValidations = data;
        this.actualPage--;
        console.log(this.emailValidations);
      });
    }
  }

}
