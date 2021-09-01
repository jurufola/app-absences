import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosedDaysEditComponent } from './closed-days-edit.component';

describe('ClosedDaysEditComponent', () => {
  let component: ClosedDaysEditComponent;
  let fixture: ComponentFixture<ClosedDaysEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClosedDaysEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosedDaysEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
