import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/core/models/note.model';
import { notes } from 'src/app/core/data/notes.data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  notes: Partial<Note>[];

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    this.notes = notes;
  }

  openNote(noteId: string) {
    this.router.navigate(['/', 'note', noteId]);
  }

  createNote() {
    this.router.navigate(['/', 'note', { mode: 'add'}]);
  }
}
