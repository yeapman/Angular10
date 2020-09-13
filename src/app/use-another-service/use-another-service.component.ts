import { Component, OnInit } from '@angular/core';
import {AppCounterService} from '../services/app-counter.service';

@Component({
  selector: 'app-use-another-service',
  templateUrl: './use-another-service.component.html',
  styleUrls: ['./use-another-service.component.scss']
})
export class UseAnotherServiceComponent implements OnInit {

  constructor(private useService: AppCounterService) { }

  ngOnInit(): void {
  }

}
