import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-change-detection-strategy',
  templateUrl: './change-detection-strategy.component.html',
  styleUrls: ['./change-detection-strategy.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeDetectionStrategyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
