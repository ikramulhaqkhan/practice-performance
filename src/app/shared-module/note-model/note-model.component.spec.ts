import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteModelComponent } from './note-model.component';
import { EventEmitter } from '@angular/core';

describe('NoteModelComponent', () => {
  let component: NoteModelComponent;
  let fixture: ComponentFixture<NoteModelComponent>;
  let deleteSelfSpy: jasmine.Spy;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoteModelComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(NoteModelComponent);
    component = fixture.componentInstance;
    // Create a spy for the deleteSelf EventEmitter
    deleteSelfSpy = spyOn(component.deleteSelf, 'emit').and.callThrough();
    fixture.detectChanges();
  });

  it('should close the window when the closeTheWindow() method is called', () => {
    // Call the closeTheWindow() method
    component.closeTheWindow();

    // Assert that the emit() method of the deleteSelf EventEmitter was called
    expect(deleteSelfSpy).toHaveBeenCalled();
  });

});
