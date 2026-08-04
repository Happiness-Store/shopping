import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rakhi } from './rakhi';

describe('Rakhi', () => {
  let component: Rakhi;
  let fixture: ComponentFixture<Rakhi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Rakhi],
    }).compileComponents();

    fixture = TestBed.createComponent(Rakhi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
