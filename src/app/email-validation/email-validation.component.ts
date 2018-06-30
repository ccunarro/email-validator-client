import {ApplicationRef, Component, OnInit} from '@angular/core';
import { EmailValidationService} from '../email-validation.service';
import {EmailValidationListComponent} from '../email-validation-list/email-validation-list.component';
import {Validation} from '../email-validation-list/email-validation-response';

@Component({
  selector: 'app-email-validation',
  templateUrl: './email-validation.component.html',
  styleUrls: ['./email-validation.component.css'],
})
export class EmailValidationComponent implements OnInit {
  validation: Validation;
  emailAddress: string;

  constructor(private emailService: EmailValidationService,
              private emailListComponent: EmailValidationListComponent) { }

  ngOnInit() {
  }

  validate() {
    console.log((this.emailAddress));
    this.emailService.getOne(this.emailAddress).subscribe(result => {
      this.validation = result;
    }, error => console.error(error));
    console.log(this.emailListComponent)
    const page = this.emailListComponent.actualPage - 1
    this.emailService.getAll(page).subscribe(result => {
      this.emailListComponent.emailValidations = result;
    }, error => console.error(error));
    // TODO como hacer para refrescar la UI desde otro componente para evitar reload
    location.reload(true);
  }

}
