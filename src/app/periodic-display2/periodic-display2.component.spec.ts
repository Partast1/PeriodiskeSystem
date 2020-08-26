import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodicDisplay2Component } from './periodic-display2.component';

describe('PeriodicDisplay2Component', () => {
  let component: PeriodicDisplay2Component;
  let fixture: ComponentFixture<PeriodicDisplay2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeriodicDisplay2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodicDisplay2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
