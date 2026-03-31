import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PPerformanceHomeComponent } from './p-performance-home.component';

describe('PPerformanceHomeComponent', () => {
  let component: PPerformanceHomeComponent;
  let fixture: ComponentFixture<PPerformanceHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PPerformanceHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PPerformanceHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
