import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {
  @Input() breadcrumbItems!: MenuItem[]
  items!: MenuItem[];
  home!: MenuItem;

  constructor() { }

  ngOnInit(): void {
    this.items = this.breadcrumbItems;
    this.home = { icon: 'pi pi-home' };
    //this.home = { icon: 'pi pi-home', routerLink: this.httpService.redirectServicePathIntegration+'Dashboard.aspx', };
    //this.home = { icon: 'pi pi-home', routerLink: '/' };
  }

}
