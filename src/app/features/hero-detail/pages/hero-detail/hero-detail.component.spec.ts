import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDetailPageComponent } from './hero-detail.component';

describe('HeroDetailComponent', () => {
  let component: HeroDetailPageComponent;
  let fixture: ComponentFixture<HeroDetailPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HeroDetailPageComponent],
    });
    fixture = TestBed.createComponent(HeroDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
