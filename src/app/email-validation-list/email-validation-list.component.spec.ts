import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailValidationListComponent } from './email-validation-list.component';

describe('EmailValidationListComponent', () => {
  let component: EmailValidationListComponent;
  let fixture: ComponentFixture<EmailValidationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailValidationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailValidationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
