import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.scss']
})
export class BindingComponent implements OnInit {

  img = 'https://www.filepicker.io/api/file/SVFQZQAyRpqJ31f6LNGe'

  constructor() {
    setTimeout(() => this.img = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png', 5000)
  }

  ngOnInit(): void {
  }

}
