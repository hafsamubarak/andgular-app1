import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesListningComponent } from './categories-listning.component';

describe('CategoriesListningComponent', () => {
  let component: CategoriesListningComponent;
  let fixture: ComponentFixture<CategoriesListningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesListningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesListningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
