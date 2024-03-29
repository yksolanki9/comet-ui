import { Component, OnInit, ViewChild } from '@angular/core';
import { Note } from 'src/app/core/models/note.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Preferences } from '@capacitor/preferences';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild('optionsPopover') optionsPopover: PopoverController;

  notes: Note[];

  isLoading = true;

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.isLoading = true;
    this.http
      .get<Note[]>(`${environment.ROOT_URL}/api/v1/notes`)
      .subscribe((notes) => {
        this.notes = notes || [];
        this.isLoading = false;
      });
  }

  openNote(note: Note) {
    this.router.navigate(['/', 'note', { note: JSON.stringify(note) }]);
  }

  createNote() {
    this.router.navigate(['/', 'note', { mode: 'add' }]);
  }

  async logout() {
    this.optionsPopover.dismiss();
    await Preferences.clear();
    this.router.navigate(['/', 'login']);
  }
}
