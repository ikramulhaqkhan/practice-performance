import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { SelectItemGroup } from 'primeng/api';

interface Practice {
  name: string;
  code: string;
}

@Component({
  selector: 'app-p-performance-home',
  templateUrl: './p-performance-home.component.html',
  styleUrls: ['./p-performance-home.component.css']
})
export class PPerformanceHomeComponent implements OnInit {
  breadCrumbItems!: MenuItem[];
  revenueData: any[] = [];
  accountData: any[] = [];
  practiceManagementData: any[] = [];
  date: Date = new Date();
  previousMonths: string[] = [];
  selectedMonth!: string;
  groupedPractices!: SelectItemGroup[];
  selectedPractices!: Practice[];

  monthLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  constructor() {
    this.groupedPractices = [
      {
        label: 'Medical Practices',
        value: 'de',
        items: [
          { label: 'MICHIGAN CANTON CARDIOLOGY ASSOCIATES PLLC', value: '1' },
          { label: 'OLIVE TREE MEDICAL CLINIC PC', value: 'Frankfurt' },
          { label: 'RIVERVIEW NEUROMUSCULAR PAIN CENTER PLLC', value: 'Hamburg' },
        ]
      },
      {
        label: 'Lab',
        value: 'lab',
        items: [
          { label: 'Doctor General Lab', value: 'Chicago' },
        ]
      },
    ];
  }

  ngOnInit(): void {
    this.loadData();
    this.onDateSelect(this.date);
  }

  loadData(): void {
    const rawRevenueData = [
      {id: 1, revenue: 'Total Billing', target: '620', trend: [600, 620, 640, 650, 660, 647] },
      {id: 2, revenue: 'Total Payments', target: '280', trend: [270, 280, 290, 300, 310, 291] },
      {id: 3, revenue: 'Reimbursement per procedure', target: '92', trend: [88, 90, 92, 95, 99, 97] },
      {id: 4, revenue: 'Patient Visits', target: '990', trend: [900, 950, 1000, 1050, 1062, 1062] },
    ];

    const rawAccountData = [
      {id: 5, revenue: 'First Pass Resolution Rate', target: '86.57', trend: [85, 86, 87, 88, 89, 89.34] },
      {id: 6, revenue: 'First Pass Denial Rate', target: '9.76', trend: [10, 9.8, 9.6, 9.4, 9.2, 9.18] },
      {id: 7, revenue: 'First Pass No-Response Rate', target: '1.67', trend: [1.6, 1.55, 1.5, 1.48, 1.46, 1.48] },
      {id: 8, revenue: 'Outstanding Denials', target: '216658', trend: [220000, 225000, 230000, 235000, 232506, 230000] },
      {id: 9, revenue: 'Revenue Realization Rate', target: '96.43', trend: [95, 96, 97, 98, 99, 99.84] },
      {id: 10, revenue: 'Gross Collection Rate', target: '29.76', trend: [30.5, 30.6, 30.7, 30.8, 30.82, 30.8] },
    ];

    const rawPracticeManagementData = [
      {id: 1, revenue: 'Patient Engagement', target: '634', trend: [600, 620, 640, 650, 660, 647] },
      {id: 2, revenue: 'Collaboration', target: '279', trend: [270, 280, 290, 300, 310, 291] },
      {id: 3, revenue: 'Payer Compliance', target: '92', trend: [88, 90, 92, 95, 99, 97] },
      {id: 4, revenue: 'User Productivity', target: '990', trend: [900, 950, 1000, 1050, 1062, 1062] },
    ];

    this.revenueData = this.calculateDynamicData(rawRevenueData);
    this.accountData = this.calculateDynamicData(rawAccountData);
    this.practiceManagementData = this.calculateDynamicData(rawPracticeManagementData);
  }

  calculateDynamicData(data: any[]): any[] {
    debugger
    return data.map((item) => ({
      ...item,
      sixMonthAvg: this.calculateAverage(item.trend),
      variance: this.calculateVariance(item.trend, item.target),
      year: this.calculateSum(item.trend),
    }));
  }

  calculateAverage(arr: number[]): number {
    return arr.reduce((sum, val) => sum + val, 0) / arr.length;
  }

  calculateVariance(trend: number[], target: string): string {
    const avg = this.calculateAverage(trend);
    return ((avg - Number(target)) / Number(target) * 100).toFixed(2);
  }

  calculateSum(arr: number[]): number {
    return arr.reduce((sum, val) => sum + val, 0);
  }

  onDateSelect(event: Date): void {
    this.previousMonths = [];
    const selectedDate = new Date(event);
    this.selectedMonth = `${this.months[selectedDate.getMonth()]} ${selectedDate.getFullYear()}`;
    this.previousMonths = Array.from({ length: 12 }, (_, i) => {
      const newDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth() - i, 1);
      return `${this.monthLabels[newDate.getMonth()]} ${newDate.getFullYear()}`;
    });
  }
}
