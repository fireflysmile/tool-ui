import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideViewComponent } from './aside-view.component';

describe('AsideViewComponent', () => {
  let component: AsideViewComponent;
  let fixture: ComponentFixture<AsideViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsideViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsideViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
