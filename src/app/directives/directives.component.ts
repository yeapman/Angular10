import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {
  backgroundToggle: boolean = true;
  toggleForStructureDirective: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
