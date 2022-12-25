import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Note } from 'src/app/core/models/note.model';
import { FormGroup, FormControl } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { noop } from 'rxjs';

@Component({
  selector: 'app-note',
  templateUrl: './note.page.html',
  styleUrls: ['./note.page.scss'],
})
export class NotePage implements OnInit {
  noteForm: FormGroup;

  mode: 'ADD' | 'EDIT' | 'VIEW' = 'VIEW';

  noteId: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.noteId = this.activatedRoute.snapshot.params.id;

    if (this.activatedRoute.snapshot.params.mode === 'add') {
      this.mode = 'ADD';
    }

    this.noteForm = new FormGroup({
      createdAt: new FormControl(new Date().toISOString()),
      title: new FormControl(),
      content: new FormControl(),
    });

    if (this.noteId) {
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
    if (this.mode === 'ADD') {
      this.http
        .post(`${environment.ROOT_URL}/api/v1/note`, this.noteForm.value)
        .subscribe(noop);
      this.mode = 'VIEW';
    } else if (this.mode === 'EDIT') {
      this.http
        .patch(
          `${environment.ROOT_URL}/api/v1/note/${this.noteId}`,
          this.noteForm.value
        )
        .subscribe(noop);
      this.mode = 'VIEW';
    } else {
      this.mode = 'EDIT';
    }
  }
}
