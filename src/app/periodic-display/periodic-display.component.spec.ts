import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodicDisplayComponent } from './periodic-display.component';

describe('PeriodicDisplayComponent', () => {
  let component: PeriodicDisplayComponent;
  let fixture: ComponentFixture<PeriodicDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeriodicDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodicDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
