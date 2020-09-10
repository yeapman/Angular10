import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.scss']
})
export class BindingComponent implements OnInit {
  text = "Initial text";

  constructor() {
  }

  ngOnInit(): void {
  }

  onInput(event: any) {
    this.text = event.target.value
  }

}
