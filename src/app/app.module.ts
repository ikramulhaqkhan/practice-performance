import { SharedModuleModule } from './shared-module/shared-module.module';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ConfirmationService, MessageService } from 'primeng/api'; 

// Pipe
import { DatePipe, DecimalPipe } from '@angular/common'; 

import { ChartModule } from 'primeng/chart';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';

// Prime NG Imports
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { ToastModule } from 'primeng/toast';
import { SkeletonModule } from 'primeng/skeleton';
import { FileUploadModule } from 'primeng/fileupload';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { TooltipModule } from 'primeng/tooltip';

// Prime Ng Table
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { SliderModule } from 'primeng/slider';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { ProgressBarModule } from 'primeng/progressbar';
import { InputTextModule } from 'primeng/inputtext';

//Fonts
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Child Components
// import { SharedModule } from 'primeng/api';
import { ScrollToModule } from '@paulvmoreau/ngx-scroll-to';

// NGX 
import { NgxMaskModule, IConfig } from 'ngx-mask';
import {
  NgxUiLoaderConfig,
  NgxUiLoaderModule, 
} from 'ngx-ui-loader';  
import { ConfirmDialogModule } from 'primeng/confirmdialog'; 

export const options: Partial<null | IConfig> | (() => Partial<IConfig>) = null;
const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsColor: '#2397a1',
  bgsOpacity: 0.5,
  bgsPosition: 'bottom-right',
  bgsSize: 60,
  bgsType: 'circle',
  blur: 5,
  delay: 0,
  fastFadeOut: true,
  fgsColor: '#2397a1',
  fgsPosition: 'center-center',
  fgsSize: 60,
  fgsType: 'circle',
  gap: 24,
  logoPosition: 'center-center',
  logoSize: 90,
  logoUrl: '',
  masterLoaderId: 'master',
  overlayBorderRadius: '0',
  overlayColor: 'rgba(255,255,255,0.5)',
  pbColor: '#2397a1',
  pbDirection: 'ltr',
  pbThickness: 3,
  hasProgressBar: false,
  text: '',
  textColor: '#2397a1',
  textPosition: 'center-center',
  maxTime: -1,
  minTime: 300,
};

@NgModule({
  declarations: [AppComponent],
  providers: [
    DatePipe,
    MessageService,
    ConfirmationService,
    // CurrencyPipe,
    DecimalPipe
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModuleModule,
    ScrollToModule.forRoot(),
    NgxMaskModule.forRoot(),
    HttpClientModule,
    ChartModule,
    CardModule,
    CarouselModule,
    DropdownModule,
    MultiSelectModule,
    ToastModule,
    SkeletonModule,
    FileUploadModule,
    AutoCompleteModule,
    TooltipModule,
    TableModule,
    CalendarModule,
    SliderModule,
    ContextMenuModule,
    DialogModule,
    ButtonModule,
    ProgressBarModule,
    InputTextModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    FontAwesomeModule,
    ConfirmDialogModule
  ],
  exports: [FontAwesomeModule, NgxMaskModule],
})
export class AppModule { }
