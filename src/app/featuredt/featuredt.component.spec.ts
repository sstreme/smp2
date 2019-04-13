import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedtComponent } from './featuredt.component';

describe('FeaturedtComponent', () => {
  let component: FeaturedtComponent;
  let fixture: ComponentFixture<FeaturedtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
