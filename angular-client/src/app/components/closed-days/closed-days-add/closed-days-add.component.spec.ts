import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosedDaysAddComponent } from './closed-days-add.component';

describe('ClosedDaysAddComponent', () => {
  let component: ClosedDaysAddComponent;
  let fixture: ComponentFixture<ClosedDaysAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClosedDaysAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosedDaysAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
