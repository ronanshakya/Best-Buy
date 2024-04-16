import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteriorCategoriesComponent } from './interior-categories.component';

describe('InteriorCategoriesComponent', () => {
  let component: InteriorCategoriesComponent;
  let fixture: ComponentFixture<InteriorCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InteriorCategoriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InteriorCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
