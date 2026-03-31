import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.css'],
})
export class ScrollToTopComponent implements OnInit, AfterViewInit {
  @ViewChild('progress') scrollProgress!: ElementRef<any>;
  @ViewChild('progressValue') progressValue!: ElementRef<any>;

  constructor() { }
  ngAfterViewInit() {
    let calcScrollValue = () => {
      let pos = document.documentElement.scrollTop;
      let calcHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      let scrollValue = Math.round((pos * 100) / calcHeight);
      if (pos > 150) {
        this.scrollProgress.nativeElement.style.display = 'grid';
      } else {
        this.scrollProgress.nativeElement.style.display = 'none';
      }
      let button = document.getElementById('progress');
      button!.addEventListener('click', () => {
        document.documentElement.scrollTop = 0;
      });
      this.scrollProgress.nativeElement.style.background = `conic-gradient(#2fbbc8 ${scrollValue}% , #d7d7d7 ${scrollValue}%)`;
    };
    window.onscroll = calcScrollValue;
    window.onload = calcScrollValue;


  }

  ngOnInit(): void { }
}
