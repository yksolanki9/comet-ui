import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Note } from 'src/app/core/models/note.model';
import { FormGroup, FormControl } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-note',
  templateUrl: './note.page.html',
  styleUrls: ['./note.page.scss'],
})
export class NotePage implements OnInit {
  noteForm: FormGroup;

  isEditMode = false;

  isNewNote = false;

  noteId: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.noteId = this.activatedRoute.snapshot.params.id;

    // For now, I'm assuming that I'll assign noteId to new expense directly. This will help in autosaving as well
    // Need to figure out the cons (if any)
    this.isNewNote = this.activatedRoute.snapshot.params.mode === 'add';

    if (this.isNewNote) {
      this.isEditMode = true;
    }

    this.noteForm = new FormGroup({
      createdAt: new FormControl(new Date().toISOString()),
      title: new FormControl(),
      content: new FormControl(),
    });

    if (this.noteId && !this.isNewNote) {
      this.http
        .get<Note>(`${environment.ROOT_URL}/api/v1/note/${this.noteId}`)
        .subscribe((note) => {
          this.noteForm.patchValue({
            createdAt: note.createdAt
              ? note.createdAt
              : new Date().toISOString(),
            title: note.title,
            content: note.content,
          });
        });
    }
  }

  onFabClicked() {
    if (this.isEditMode) {
      this.http
        .patch(
          `${environment.ROOT_URL}/api/v1/note/${this.noteId}`,
          this.noteForm.value
        )
        .subscribe(() => {});
    }
    this.isEditMode = !this.isEditMode;
  }
}
