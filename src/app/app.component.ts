import {Component, OnInit} from '@angular/core';
import {AppCounterService} from './services/app-counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor(private appService: AppCounterService) {
  }

}
