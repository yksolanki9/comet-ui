import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/core/models/note.model';
import { notes } from 'src/app/core/data/notes.data';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  notes: Partial<Note>[];

  constructor() { }

  ngOnInit() {
    this.notes = notes;
  }
}
