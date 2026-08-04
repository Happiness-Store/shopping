import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnGifts } from './return-gifts';

describe('ReturnGifts', () => {
  let component: ReturnGifts;
  let fixture: ComponentFixture<ReturnGifts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReturnGifts],
    }).compileComponents();

    fixture = TestBed.createComponent(ReturnGifts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
