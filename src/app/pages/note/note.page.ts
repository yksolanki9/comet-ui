import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { notes } from 'src/app/core/data/notes.data';
import { Note } from 'src/app/core/models/note.model';
import { DatePipe } from '@angular/common';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-note',
  templateUrl: './note.page.html',
  styleUrls: ['./note.page.scss'],
})
export class NotePage implements OnInit {
  @ViewChild('noteContent') noteContent: ElementRef;

  note: Partial<Note>;

  isEditMode = false;

  isNewNote = false;

  maxDate: string;

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

    if(noteId) {
      this.note = notes[noteId];
    }
  }

  ionViewWillEnter() {
    this.maxDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
  }

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
