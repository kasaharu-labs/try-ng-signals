import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { ROUTES } from '../../../../routes';
import { HeroDetailComponent } from '../../containers/hero-detail/hero-detail.component';
import { HeroDetailPageComponent } from './hero-detail.component';

@Component({ selector: 'app-hero-detail', template: '', standalone: true })
class MockHeroDetailComponent {}

describe('HeroDetailComponent', () => {
  let harness: RouterTestingHarness;
  let component: HeroDetailPageComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroDetailPageComponent],
      providers: [provideRouter(ROUTES)],
    })
      .overrideComponent(HeroDetailPageComponent, { remove: { imports: [HeroDetailComponent] }, add: { imports: [MockHeroDetailComponent] } })
      .compileComponents();

    harness = await RouterTestingHarness.create();
    component = await harness.navigateByUrl('/detail/1', HeroDetailPageComponent);

    harness.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
