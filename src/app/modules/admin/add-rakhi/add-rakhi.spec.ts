import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRakhi } from './add-rakhi';

describe('AddRakhi', () => {
  let component: AddRakhi;
  let fixture: ComponentFixture<AddRakhi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddRakhi],
    }).compileComponents();

    fixture = TestBed.createComponent(AddRakhi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
