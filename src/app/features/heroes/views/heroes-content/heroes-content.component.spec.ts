import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesContentComponent } from './heroes-content.component';

describe('HeroesContentComponent', () => {
  let component: HeroesContentComponent;
  let fixture: ComponentFixture<HeroesContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HeroesContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroesContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
