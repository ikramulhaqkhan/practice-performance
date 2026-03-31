
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ChartModule } from 'primeng/chart';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonModule } from 'primeng/button';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenuItem } from 'primeng/api';
import { FormsModule } from '@angular/forms';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { faLongArrowAltUp } from '@fortawesome/free-solid-svg-icons';
import { Chart } from 'chart.js';
Chart.register(ChartDataLabels);

@Component({
  selector: 'app-p-performance-table',
  standalone: true,
  imports: [CommonModule, TableModule, ChartModule, FontAwesomeModule, ButtonModule, TabMenuModule, FormsModule,],
  templateUrl: './p-performance-table.component.html',
  styleUrls: ['./p-performance-table.component.css']
})
export class PPerformanceTableComponent implements OnInit {
  @Input() data: any = [];
  @Input() titleName: any;
  @Input() previousMonth: any;
  @Input() selectedMonth: any;

  items: MenuItem[] = [];
  totalPayementItems: MenuItem[] = [];
  totalPaymentAutomation: MenuItem[] = [];
  automationIndex: MenuItem[] = [];
  claimsTrackingItem: MenuItem[] = [];
  totalPatientPayment: MenuItem[] = [];
  menuActiveItem!: MenuItem;
  totalPatientPaymentMenu!: MenuItem;
  totalPaymentAutomationMenu!: MenuItem;
  menuAutomationIndexActive!: MenuItem;
  menuclaimsTrackingActive!: MenuItem;
  menutotalPayementItems!: MenuItem;

  subMenushowHide: any;
  areaChartData: any = [];
  selectedData: any = [];
  basicOptions: any;
  options: any;
  chartOptions: any;
  expanded: boolean = false;
  //Font Icon //
  faLongArrowAltUp = faLongArrowAltUp;

  constructor() { }
  ngOnInit(): void {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    this.MenuDefault();
    this.items = [
      {label: 'Trend', command: event => {this.setActiveTab(event);}},
      {label: 'Automation Index', command: event => {this.setActiveTab(event);}},
      {label: 'Claims Tracking', command: event => {this.setActiveTab(event);}},
    ]
    ///Total Payment Menu /////
    this.totalPayementItems = [
      {label: 'Trend', command: event => {this.setActiveTotalPayment(event);}},
      {label: 'Automation Index', command: event => {this.setActiveTotalPayment(event);}},
      {label: 'Payer Max', command: event => {this.setActiveTotalPayment(event);this.getChartOptions('#03A9F4');}},
      {label: 'Patient Payment', command: event => {this.setActiveTotalPayment(event);}},
    ]
    this.totalPaymentAutomation = [
      {label: 'Auto Payment', command: event => {this.setActiveTabTotalAutomation(event);this.getChartOptions('#4CAF50');}},
      {label: 'User Effort', command: event => {this.setActiveTabTotalAutomation(event);this.getChartOptions('#FFEB3B');}},
      {label: 'Miss Match', command: event => {this.setActiveTabTotalAutomation(event);this.getChartOptions('#F44336');}},
      {label: 'Average Processing Time', command: event => {this.setActiveTabTotalAutomation(event);this.getChartOptions('#03A9F4');}},
    ]
    this.totalPatientPayment = [
      {label: 'Credit Card', command: event => {this.setActiveTabTotalPatientPayment(event);this.getChartOptions('#4CAF50');}},
      {label: 'Online', command: event => {this.setActiveTabTotalPatientPayment(event);this.getChartOptions('#FFEB3B');}},
      {label: 'Third Party Financing', command: event => {this.setActiveTabTotalPatientPayment(event);this.getChartOptions('#FF9800');}},
      ///Automated Clearing House
      {label: 'ACH', command: event => {this.setActiveTabTotalPatientPayment(event);this.getChartOptions('#2196F3');}},
    ]
    ///Total Payment Menu /////
    this.automationIndex = [
      {label: 'Auto Charges', command: event => {this.setActiveTabAutomation(event);this.getChartOptions('#4CAF50');}},
      {label: 'User Effort', command: event => {this.setActiveTabAutomation(event);this.getChartOptions('#FFEB3B');}},
      {label: 'Incomplete CLaims', command: event => {this.setActiveTabAutomation(event);this.getChartOptions('#F44336');}},
      {label: 'Validation Error', command: event => {this.setActiveTabAutomation(event);this.getChartOptions('#F44336');}},
      {label: 'Submission Lag Time', command: event => {this.setActiveTabAutomation(event);this.getChartOptions('#03A9F4');}},
      {label: 'Time To collect', command: event => {this.setActiveTabAutomation(event);this.getChartOptions('#9C27B0');}},
    ]
    this.claimsTrackingItem = [
      {label: 'Recieved', command: event => {this.setActiveTabclaimsTracking(event);this.getChartOptions('#388E3C');}},
      {label: 'Invalid Files', command: event => {this.setActiveTabclaimsTracking(event);this.getChartOptions('#FFC107');}},
      {label: 'Provider Pending', command: event => {this.setActiveTabclaimsTracking(event);this.getChartOptions('#FB8C00');}},
      {label: 'Submitted', command: event => {this.setActiveTabclaimsTracking(event);this.getChartOptions('#1976D2');}},
      {label: 'Paid', command: event => {this.setActiveTabclaimsTracking(event);this.getChartOptions('#689F38');}},
      {label: 'Denied', command: event => {this.setActiveTabclaimsTracking(event);this.getChartOptions('#D32F2F');}},
      {label: 'Patient AR', command: event => {this.setActiveTabclaimsTracking(event);this.getChartOptions('#E64A19');}},
      {label: 'Bad Debits', command: event => {this.setActiveTabclaimsTracking(event);this.getChartOptions('#6A1B9A');}},
    ]

    this.getChartOptions('#4CAF50');

    this.basicOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {display: false},
        tooltip: {enabled: false},
        usePointStyle: true,
        backgroundColor: '#2db5c1',
        height: 30,
        width: 50,
        callbacks: {
          labelPointStyle: function () {
            return {
              pointStyle: false,
              rotation: 0
            }
          },
          labelTextColor: function () {
            return 'white';}
        },
        datalabels: {display: false},
      },
      scales: { x: { display: false }, y: { display: false } },
      elements: { 
        point: { radius: 1 }, // Hide data points
        line: { borderWidth: 2 }, // Remove line borders
      },
      animation: {
        duration: 1000, // Duration of the animation in milliseconds
        easing: 'easeInOutQuad', // Easing function for the animation
        onComplete: function() {
          console.log("Animation completed");
        }
      }
    };

    this.options = {
      maintainAspectRatio: false,
      layout: {
        padding: {
          top: 30, // Add extra padding at the top
          left: 10,
          right: 10,
          bottom: 10,
        },
      },
      // aspectRatio: 0.6,
      plugins: {
        legend: { display: false },
        datalabels: {
          display: true,
          // display: function (context: any) {
          //   // Show data labels only for the first dataset
          //   return context.datasetIndex === 0;
          // }, // Always display data labels on points
          color: '#495057', // Set label color
          font: { size: 12, weight: 400 }, // Adjust font size
          align: 'top', // Position label above the point
          formatter: function (value: any, context: any) {
            const datasetIndex = context.datasetIndex; // Identify the dataset
            const datasets = context.chart.data.datasets;

            // Check for overlapping labels by comparing other dataset values
            for (let i = 0; i < datasets.length; i++) {
              if (i !== datasetIndex) {
                const otherValue = datasets[i].data[context.dataIndex];
                if (value === otherValue) {
                  return value + ' ▲'; // Add an icon or text to differentiate
                }
              }
            }
            return value; // Default value display
          },
          offset: 10, // Add spacing between labels
          clamp: true, // Prevent labels from overflowing the chart area

        },
        tooltip: {
          usePointStyle: true,
          borderColor: 'none',
          callbacks: {
            labelPointStyle: function (context:any) {
              return {
                pointStyle: 'circle', // Change to circle
                rotation: 0, // No rotation
              };
            },
          },
          bodyFont: {
            size: 12, // Adjust font size for tooltip content
          },
          boxPadding: 4, // Padding inside the box
          boxHeight: 8, // Adjust height of the box
          boxWidth: 8, // Adjust width of the marker box
        },
      },

      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
            padding: 10, // Add space between X-axis labels and axis
          },
          grid: { drawBorder: false, display: false } // Hide grid lines for X-axis           
        },
        y: {
          ticks: {
            color: textColorSecondary,
            padding: 5,
          },
          grid: { drawBorder: false, display: false }, // Hide grid lines for X-axis
          border: {
            display: false,            // Remove the left Y-axis line
          },
        }
      },
      elements: {
        point: {
          backgroundColor: (context: any) => {
            // Use the dataset's border color for the point's background color
            return context.dataset.borderColor;
          },
          borderColor: '#000', // Solid border for better visibility
          borderWidth: 4,
        },
        line: {
          borderWidth: 1.3, // Line thickness
        }
      }
    };

  }

MenuDefault(){
  this.menuActiveItem = this.items[0];
  this.menutotalPayementItems = this.totalPayementItems[0];
  this.totalPaymentAutomationMenu = this.totalPaymentAutomation[0];
  this.totalPatientPaymentMenu = this.totalPatientPayment[0];
  this.menuAutomationIndexActive = this.automationIndex[0];
  this.menuclaimsTrackingActive = this.claimsTrackingItem[0];
}


  setActiveTabAutomation(event: any) {
    if (this.menuAutomationIndexActive) {
      this.menuAutomationIndexActive = event.item;
    }
  }
  setActiveTabTotalAutomation(event: any) {
    if (this.totalPaymentAutomationMenu) {
      this.totalPaymentAutomationMenu = event.item;
    }
  }
  setActiveTotalPayment(event: any) {
    this.menutotalPayementItems = event.item;
    this.totalPaymentAutomationMenu = this.totalPaymentAutomation[0];
    this.getChartOptions('#4CAF50');
    this.totalPatientPaymentMenu = this.totalPatientPayment[0];
    this.getChartOptions('#4CAF50');
  }
  setActiveTabTotalPatientPayment(event: any) {
    this.totalPatientPaymentMenu = event.item;
   
  }
  setActiveTabclaimsTracking(event: any) {
    if (this.menuclaimsTrackingActive) {
      this.menuclaimsTrackingActive = event.item;
    }
  }
  setActiveTab(event: any) {
    if (this.menuActiveItem) {
      this.menuActiveItem = event.item;
      this.menuAutomationIndexActive = this.automationIndex[0];
      this.getChartOptions('#388E3C');
      this.menuclaimsTrackingActive = this.claimsTrackingItem[0];
      this.getChartOptions('#388E3C');
    }


  }
  toggle(event: any) {
    setTimeout(() => {
      if (!this.expanded) {
        this.MenuDefault();
      }
    }, 0);
  }

  getChartOptions(bgColor: string) {
    this.chartOptions = {
      responsive: true,
      backgroundColor: bgColor,
      borderWidth: 0,
      plugins: {
        datalabels: {
          display: true,
          font: { size: 12, weight: 400 }, // Adjust font size
          align: 'end',
          anchor: 'end',
          formatter: function (value: any, context: any) {
            const datasetLabel = context.chart.data.datasets[context.datasetIndex].label;

            if (datasetLabel === 'Time To collect' || datasetLabel === 'Submission Lag Time' || datasetLabel === 'Average Processing Time') {
              return `${value} days`; // Show days for Submission Lag Time and Time To Collect
            } else {
              const total = context.chart.data.datasets[context.datasetIndex].data.reduce((sum: number, val: number) => sum + val, 0);
              const percentage = ((value / total) * 100).toFixed(1); // Calculate percentage
              return `${percentage}%`; // Show percentage for other datasets
            }
          },
          offset: 5,
          clamp: true,
        },
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: function (tooltipItem: any) {
              const datasetLabel = tooltipItem.dataset.label;

              // Custom tooltip logic for all datasets
              if (datasetLabel === 'Time To collect' || datasetLabel === 'Submission Lag Time' || datasetLabel === 'Average Processing Time') {
                return `${datasetLabel}: ${tooltipItem.raw} days`; // Tooltip for Time To Collect and Submission Lag Time
              } else {
                // Default tooltip for other datasets
                const total = tooltipItem.dataset.data.reduce((sum: number, val: number) => sum + val, 0);
                const percentage = ((tooltipItem.raw / total) * 100).toFixed(1);
                return `${datasetLabel}: ${percentage}%`;
              }
            },
          },
          boxPadding: 4, // Padding inside the box
          boxHeight: 9, // Adjust height of the box
          boxWidth: 9, // Adjust width of the marker box
        },
      },
      layout: {
        padding: {
          top: 30, // Add padding at the top
          bottom: 10, // Add padding at the bottom
          left: 10, // Add padding on the left
          right: 10, // Add padding on the right
        },
      },
      scales: {
        x: {

          grid: { drawBorder: false, display: false } // Hide grid lines for X-axis           
        },
        y: {

          grid: { drawBorder: false, display: false }, // Hide grid lines for X-axis
          border: {
            display: false,            // Remove the left Y-axis line
          },
        },

      },
      elements: {
        bar: {
          categoryPercentage: 0.7,  // Decrease this to make bars thinner in relation to categories
          barPercentage: 0.6,       // Reduce this value to make bars narrower
        }
      }
    };
  }

  
}
