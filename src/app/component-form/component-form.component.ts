import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {PostInterface} from '../app.component';

@Component({
  selector: 'app-component-form',
  templateUrl: './component-form.component.html',
  styleUrls: ['./component-form.component.scss']
})
export class ComponentFormComponent implements OnInit {
  @Output() onAdd: EventEmitter<PostInterface>  = new EventEmitter<PostInterface>();

  @ViewChild('titleHiper') inputRef123: ElementRef;

  title = '';
  text = '';


  constructor() { }

  ngOnInit(): void {
  }

  addPost() {
   if(this.text.trim() && this.title.trim()) {
     var post: PostInterface = {
       title: this.title,
       text: this.text
     }
     this.onAdd.emit(post);
     console.log('New post!', post);
     this.title = this.text = '';
   }
  }


  focusTitle() {
    this.inputRef123.nativeElement.focus();
  }

}
