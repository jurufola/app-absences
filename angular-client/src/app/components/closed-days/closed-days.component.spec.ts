import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosedDaysComponent } from './closed-days.component';

describe('ClosedDaysComponent', () => {
  let component: ClosedDaysComponent;
  let fixture: ComponentFixture<ClosedDaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClosedDaysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosedDaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
