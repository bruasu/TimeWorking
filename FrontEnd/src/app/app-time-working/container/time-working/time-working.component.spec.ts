import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeWorkingComponent } from './time-working.component';

describe('TimeWorkingComponent', () => {
  let component: TimeWorkingComponent;
  let fixture: ComponentFixture<TimeWorkingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeWorkingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeWorkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
