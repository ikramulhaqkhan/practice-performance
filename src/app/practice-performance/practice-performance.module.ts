import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarModule } from 'primeng/calendar';

import { PracticePerformanceRoutingModule } from './practice-performance-routing.module';
import { PPerformanceHomeComponent } from './p-performance-home/p-performance-home.component';
import { SharedModuleModule } from "../shared-module/shared-module.module";
import { DropdownModule } from 'primeng/dropdown';
import { PPerformanceTableComponent } from "./p-performance-table/p-performance-table.component";
import { TabMenuModule } from 'primeng/tabmenu';
import { FormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';
@NgModule({
  declarations: [
    PPerformanceHomeComponent
  ],
  imports: [
    CommonModule,
    PracticePerformanceRoutingModule,
    SharedModuleModule,
    DropdownModule,
    PPerformanceTableComponent,
    TabMenuModule,
    CalendarModule,
    FormsModule,
    MultiSelectModule,
    
]
})
export class PracticePerformanceModule { }
