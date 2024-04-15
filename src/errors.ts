//

/*
Different type of errors that app can throw
*/

export class BadTokenError extends Error {
  constructor(public code: string, public message: string) {
    super();
  }
}

export class UnAuthorisedError extends Error {
  constructor(public code: string, public message: string) {
    super();
  }
}

export class DataValidationError extends Error {
  constructor(public code: string, public message: string) {
    super();
  }
}

export class ServerError extends Error {
  constructor(public code: string, public message: string) {
    super();
  }
}

export class AlreadyExistError extends Error {
  constructor(public code: string, public message: string) {
    super();
  }
}

export class UserMismatchError extends Error {
  constructor(public code: string, public message: string, public body: any) {
    super();
  }
}

export class NotFoundError extends Error {
  constructor(public code: string, public message: string) {
    super();
  }
}

export class CreationError extends Error {
  constructor(public code: string, public message: string) {
    super();
  }
}

export class BadRequestError extends Error {
  constructor(public code: string, public message: string) {
    super();
  }
}

export class ThresholdExceededError extends Error {
  constructor(public code: string, public message: string) {
    super();
  }
}
