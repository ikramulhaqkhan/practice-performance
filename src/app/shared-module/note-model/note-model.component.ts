import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-note-model',
  templateUrl: './note-model.component.html',
  styleUrls: ['./note-model.component.css'],
})
export class NoteModelComponent implements OnInit {
  @Input() showDialog!: boolean;
  @Input() data: any;
  //@Input()  showmyDialog;boolean;
  @Output() deleteSelf = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}
  closeTheWindow() {
    this.deleteSelf.emit();
  }
}
