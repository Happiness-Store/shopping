import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Decoration } from './decoration';

describe('Decoration', () => {
  let component: Decoration;
  let fixture: ComponentFixture<Decoration>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Decoration],
    }).compileComponents();

    fixture = TestBed.createComponent(Decoration);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
