import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { SharedModuleRoutingModule } from './shared-module-routing.module';
// Components
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { NoteModelComponent } from './note-model/note-model.component';
// Font Awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// Pipes

// NG Prime
import { DialogModule } from 'primeng/dialog';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';
import { ScrollToModule } from '@paulvmoreau/ngx-scroll-to';
@NgModule({
  declarations: [
    NoteModelComponent,
    ScrollToTopComponent,
    BreadcrumbComponent
  ],
  imports: [
    CommonModule,
    SharedModuleRoutingModule,
    DialogModule,
    FontAwesomeModule,
    BreadcrumbModule,
    ScrollToModule,
    NgOptimizedImage
  ],
  exports: [
    NoteModelComponent,
    ScrollToTopComponent,
    BreadcrumbComponent
  ],
})
export class SharedModuleModule { }
