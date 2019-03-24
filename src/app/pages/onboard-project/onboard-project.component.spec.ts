import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardProjectComponent } from './onboard-project.component';

describe('OnboardProjectComponent', () => {
  let component: OnboardProjectComponent;
  let fixture: ComponentFixture<OnboardProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnboardProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
