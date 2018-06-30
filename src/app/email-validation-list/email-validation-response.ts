declare class EmailValidationResponse {

  actualPage: number;
  totalItems: number;
  totalPages: number;
  validations: Array<Validation>;

}

declare class Validation {

  email: string;
  didYouMean: string;
  user: string;
  domain: string;
  formatValid: boolean;
  mxFound: boolean;
  smtpCheck: boolean;
  catchAll: boolean;
  role: boolean;
  disposable: boolean;
  free: boolean;
  score: number;
}


