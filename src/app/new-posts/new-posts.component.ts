import {Component, Input, OnInit} from '@angular/core';
import {PostInterface} from '../app.component';


@Component({
  selector: 'app-new-posts',
  templateUrl: './new-posts.component.html',
  styleUrls: ['./new-posts.component.scss']
})
export class NewPostsComponent implements OnInit {
  @Input() POST: PostInterface;
  constructor() { }

  ngOnInit(): void {
  }

}
