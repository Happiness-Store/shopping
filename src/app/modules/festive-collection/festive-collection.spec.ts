import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FestiveCollection } from './festive-collection';

describe('FestiveCollection', () => {
  let component: FestiveCollection;
  let fixture: ComponentFixture<FestiveCollection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FestiveCollection],
    }).compileComponents();

    fixture = TestBed.createComponent(FestiveCollection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
