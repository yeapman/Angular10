import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.scss']
})
export class InterpolationComponent implements OnInit {
  title = 'Dynamic title'

  constructor() { }

  ngOnInit(): void {
  }

}
