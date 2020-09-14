import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {MyValidators} from './my.validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  form: FormGroup;
// async validator should add as third parametr ets MyValidators.unicAsyncValidator
  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [MyValidators.restrictedEmails, Validators.email, Validators.required], MyValidators.unicAsyncValidator),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      adress: new FormGroup({
        country: new FormControl('ru'),
        city: new FormControl('Moscow', Validators.required)
      }),
      skills: new FormArray([])
    })
  }

  constructor() {
  }

  submit() {
    this.form.reset();
  }

  setCapital() {
    const cityMap = {
      ru: 'Moskow',
      ua: 'Kyiv',
      by: 'Belarus'
    };
    const cityKey = this.form.get('adress').get('country').value
    const city = cityMap[cityKey];
    console.log(city);

    this.form.patchValue({
      adress: {city}
      }
    )

  }

  addSkill() {
    const control = new FormControl('', Validators.required);
    // (<FormArray>this.form.get('skills')) - kastit'
    (this.form.get('skills') as FormArray).push(control)
  }

}
