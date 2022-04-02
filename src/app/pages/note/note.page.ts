import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { notes } from 'src/app/core/data/notes.data';
import { Note } from 'src/app/core/models/note.model';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-note',
  templateUrl: './note.page.html',
  styleUrls: ['./note.page.scss']
})
export class NotePage implements OnInit {
  @ViewChild('noteContent') noteContent: ElementRef;

  note: Partial<Note>;

  noteForm: FormGroup;

  isEditMode = false;

  isNewNote = false;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    const noteId = this.activatedRoute.snapshot.params.id;

    // For now, I'm assuming that I'll assign noteId to new expense directly. This will help in autosaving as well
    // Need to figure out the cons (if any)
    this.isNewNote = this.activatedRoute.snapshot.params.mode === 'add';

    if (this.isNewNote) {
      this.isEditMode = true;
    }

    if (noteId && !this.isNewNote) {
      this.note = notes[noteId];
    }

    this.noteForm = new FormGroup({
      createdAt: new FormControl(this.isNewNote ? new Date().toISOString(): this.note.createdAt),
      title: new FormControl(this.isNewNote ? null : this.note.title),
      content: new FormControl(this.isNewNote ? null : this.note.content),
    });
  }

  ionViewWillEnter() {
    if(!this.isNewNote) {
      setTimeout(() => this.noteForm.patchValue({
        title: this.note.title,
        content: this.note.content
      }), 300);
    }
  }

  switchMode() {
    this.isEditMode = !this.isEditMode;
  }
}
