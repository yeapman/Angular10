import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {
  backgroundToggle: boolean = true;
  toggleForStructureDirective: boolean = true;
  switch: boolean;
  arr = [1,2,3,4,5]

  hardArrWithObjects = [
    {title: 'Post 1', author: 'Vladilen', comments: [
        {name: 'Yarik', text: 'lorem 1'},
        {name: 'Vasya', text: 'hardVasya'}
      ]}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
