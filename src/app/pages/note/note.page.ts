import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Note } from 'src/app/core/models/note.model';
import { FormGroup, FormControl } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { noop } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoaderService } from 'src/app/core/services/loader.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.page.html',
  styleUrls: ['./note.page.scss'],
})
export class NotePage implements OnInit {
  noteForm: FormGroup;
  mode: 'ADD' | 'EDIT' | 'VIEW' = 'VIEW';
  noteId: string;
  isLoading = true;
  uploadInProgress = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
    private loaderService: LoaderService
  ) {}

  ngOnInit() {
    this.noteId = this.activatedRoute.snapshot.params.id;

    if (this.activatedRoute.snapshot.params.mode === 'add') {
      this.mode = 'ADD';
      this.isLoading = false;
    }

    this.noteForm = new FormGroup({
      dateOfEntry: new FormControl(new Date().toISOString()),
      title: new FormControl(),
      content: new FormControl(),
    });

    if (this.noteId) {
      this.http
        .get<Note>(`${environment.ROOT_URL}/api/v1/note/${this.noteId}`)
        .pipe(finalize(() => (this.isLoading = false)))
        .subscribe((note) => {
          this.noteForm.patchValue({
            dateOfEntry: note.dateOfEntry,
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

  deleteNote() {
    this.loaderService.showLoader();
    this.http
      .delete(`${environment.ROOT_URL}/api/v1/note/${this.noteId}`)
      .pipe(finalize(() => this.loaderService.hideLoader()))
      .subscribe(() => this.router.navigate(['/home']));
  }

  handleSuccess(event) {
    console.log('iMAGE UPLOADED SCCESSFULLY', event);
  }

  convertToBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (err) => reject(err);
    });
  }

  async uploadImage(event) {
    this.uploadInProgress = true;
    const file = event.target.files[0];
    const base64 = await this.convertToBase64(file);
    this.http
      .post(`${environment.ROOT_URL}/api/v1/imagekit`, {
        fileName: file.name,
        base64,
      })
      .subscribe(() => (this.uploadInProgress = false));
  }
}
