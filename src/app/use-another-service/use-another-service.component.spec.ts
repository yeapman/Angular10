import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseAnotherServiceComponent } from './use-another-service.component';

describe('UseAnotherServiceComponent', () => {
  let component: UseAnotherServiceComponent;
  let fixture: ComponentFixture<UseAnotherServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseAnotherServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UseAnotherServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
