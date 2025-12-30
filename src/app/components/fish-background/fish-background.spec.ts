import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FishBackground } from './fish-background';

describe('FishBackground', () => {
  let component: FishBackground;
  let fixture: ComponentFixture<FishBackground>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FishBackground]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FishBackground);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
