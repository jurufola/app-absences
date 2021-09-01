import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosedDaysDeleteComponent } from './closed-days-delete.component';

describe('ClosedDaysDeleteComponent', () => {
  let component: ClosedDaysDeleteComponent;
  let fixture: ComponentFixture<ClosedDaysDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClosedDaysDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosedDaysDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
