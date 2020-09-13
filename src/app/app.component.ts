import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  form: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      adress: new FormGroup({
        country: new FormControl('ru'),
        city: new FormControl('Moscow', Validators.required)
      })
    })
  }

  constructor() {
  }

  submit() {
    console.log(this.form.value)
  }

  setCapital() {
    const cityMap = {
      ru: 'Moskow',
      ua: 'Kyiv',
      by: 'Belarus'
    }

    const cityKey = this.form.get('adress').get('country').value
    const city = cityMap[cityKey];
    console.log(city);

    this.form.patchValue({
      adress: {city}
      }
    )
  }

}
