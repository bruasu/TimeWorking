import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsWorkComponent } from './projects-work.component';

describe('ProjectsWorkComponent', () => {
  let component: ProjectsWorkComponent;
  let fixture: ComponentFixture<ProjectsWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
