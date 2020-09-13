import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckParallelViewStylesComponent } from './check-parallel-view-styles.component';

describe('CheckParallelViewStylesComponent', () => {
  let component: CheckParallelViewStylesComponent;
  let fixture: ComponentFixture<CheckParallelViewStylesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckParallelViewStylesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckParallelViewStylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
