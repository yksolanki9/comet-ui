import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { notes } from 'src/app/core/data/notes.data';
import { Note } from 'src/app/core/models/note.model';
import { DatePipe } from '@angular/common';
import { PopoverController } from '@ionic/angular';
import { FormGroup, FormControl, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-note',
  templateUrl: './note.page.html',
  styleUrls: ['./note.page.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: NotePage,
    }
  ]
})
export class NotePage implements OnInit, ControlValueAccessor {
  @ViewChild('noteContent') noteContent: ElementRef;

  note: Partial<Note>;

  noteForm: FormGroup;

  isEditMode = false;

  isNewNote = false;

  maxDate: string;

  onChange = (newValue) => {}

  constructor(
    private activatedRoute: ActivatedRoute,
    private datePipe: DatePipe,
    private popoverController: PopoverController,
  ) { }

  ngOnInit() {
    const noteId = this.activatedRoute.snapshot.params.id;

    // For now, I'm assuming that I'll assign noteId to new expense directly. This will help in autosaving as well
    // Need to figure out the cons (if any)
    this.isNewNote = this.activatedRoute.snapshot.queryParams.mode === 'add';

    if (noteId) {
      this.note = notes[noteId];
    }

    this.noteForm = new FormGroup({
      createdAt: new FormControl(this.isNewNote ? new Date(): this.note.createdAt),
      title: new FormControl(this.isNewNote ? null : this.note.title),
      content: new FormControl(this.isNewNote ? null : this.note.content),
    });

    this.noteForm.valueChanges.subscribe((newValue) => this.onChange(newValue));
  }

  ionViewWillEnter() {
    this.maxDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
  }

  writeValue(value: string) {
    // this.noteForm.controls = {
    //   createdAt: '',
    //   title: '',
    //   content: ''
    // }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
    console.log(fn);
  }

  registerOnTouched(fn: any): void { }

  switchMode() {
    this.isEditMode = !this.isEditMode;
    if(this.isEditMode) {
      setTimeout(() => this.noteContent.nativeElement.focus(), 200);
    }
  }

  dateSelected(event) {
    this.note.createdAt = event.detail.value;
    this.popoverController.dismiss();
  }
}
