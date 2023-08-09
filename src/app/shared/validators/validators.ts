import { FormControl, ValidationErrors, Validators } from "@angular/forms";

export const firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
export const emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

export const cantBeStrider = ( control : FormControl ) : ValidationErrors | null => {
  const value : string = control.value.trim().toLowerCase();
  if ( value === 'strider' ) return { noStrider : true };
  return null;
}

export const nameSyncValidations : ( ValidationErrors | null ) [] = [
  Validators.required,
  Validators.pattern ( firstNameAndLastnamePattern )
];

export const emailSyncValidations : ( ValidationErrors | null ) [] = [
  Validators.required,
  Validators.pattern ( emailPattern )
];

export const usernameSyncValidations : ( ValidationErrors | null ) [] = [
  Validators.required,
  cantBeStrider
];

export const passwordSyncValidations : ( ValidationErrors | null ) [] = [
  Validators.required,
  Validators.minLength ( 6 )
];
