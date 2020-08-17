import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodicDetailComponent } from './periodic-detail.component';

describe('PeriodicDetailComponent', () => {
  let component: PeriodicDetailComponent;
  let fixture: ComponentFixture<PeriodicDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeriodicDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodicDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
