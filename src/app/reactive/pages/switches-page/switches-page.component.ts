import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from 'src/app/shared/service/validators.service';

@Component({
  templateUrl: './switches-page.component.html'
})
export class SwitchesPageComponent implements OnInit {
  public myForm : FormGroup = this.fb.group ( {
    gender : [ 'M', Validators.required ],
    wantNotifications : [ true, Validators.required ],
    termsAndConditions : [ false, Validators.requiredTrue ]
  } );

  public person = {
    gender : 'F',
    wantNotifications : false
  }

  constructor (
    private fb : FormBuilder,
    private validatorsService : ValidatorsService
  ) {}

  ngOnInit(): void {
    this.myForm.reset ( this.person );
  }

  isValidField ( field : string ) : boolean | null {
    return this.validatorsService.isValidField ( this.myForm, field );
  }

  onSave() : void {
    if ( this.myForm.invalid ) return this.myForm.markAllAsTouched();

    const { termsAndConditions, ...newPerson } = this.myForm.value;

    this.person = newPerson;
    console.log ( this.myForm.value );
    console.log ( this.person );
  }
}
