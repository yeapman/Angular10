import { Component, OnInit } from '@angular/core';
import {AppCounterService} from '../services/app-counter.service';

@Component({
  selector: 'app-counter2',
  templateUrl: './counter2.component.html',
  styleUrls: ['./counter2.component.scss'],
  providers: [AppCounterService]
})
export class Counter2Component implements OnInit {
  constructor(private appe2: AppCounterService) { }
  
  ngOnInit(): void {
  }

}
