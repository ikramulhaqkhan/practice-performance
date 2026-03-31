import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PPerformanceTableComponent } from './p-performance-table.component';

describe('PPerformanceTableComponent', () => {
  let component: PPerformanceTableComponent;
  let fixture: ComponentFixture<PPerformanceTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PPerformanceTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PPerformanceTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
