import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Note } from 'src/app/core/models/note.model';
import { FormGroup, FormControl } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { finalize } from 'rxjs/operators';
import { LoaderService } from 'src/app/core/services/loader.service';
import { ModalController } from '@ionic/angular';
import { ImagePreviewModalComponent } from './image-preview-modal/image-preview-modal.component';
import { register } from 'swiper/element/bundle';

@Component({
  selector: 'app-note',
  templateUrl: './note.page.html',
  styleUrls: ['./note.page.scss'],
})
export class NotePage implements OnInit, AfterViewInit {
  @ViewChild('imageInput') imageInput: ElementRef;
  noteForm: FormGroup;
  mode: 'ADD' | 'EDIT' | 'VIEW' = 'VIEW';
  note: Note;
  isLoading = true;
  uploadInProgress = false;
  imageFiles = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
    private loaderService: LoaderService,
    private modalController: ModalController
  ) {}

  ngOnInit() {}

  onFabClicked() {
    if (this.mode === 'ADD') {
      this.uploadInProgress = true;
      this.http
        .post(`${environment.ROOT_URL}/api/v1/note`, {
          ...this.noteForm.value,
          images: this.imageFiles,
        })
        .subscribe(() => (this.uploadInProgress = false));
      this.mode = 'VIEW';
    } else if (this.mode === 'EDIT') {
      this.uploadInProgress = true;

      this.http
        .patch(`${environment.ROOT_URL}/api/v1/note/${this.note._id}`, {
          ...this.noteForm.value,
          images: this.imageFiles,
        })
        .subscribe(() => (this.uploadInProgress = false));
      this.mode = 'VIEW';
    } else {
      this.mode = 'EDIT';
    }
  }

  async openImagePreview() {
    const imagePreviewModal = await this.modalController.create({
      component: ImagePreviewModalComponent,
      componentProps: {
        images: this.imageFiles,
      },
    });

    imagePreviewModal.present();
  }

  onClickImageContainer(event) {
    if (!(event instanceof CustomEvent)) {
      if (this.imageFiles.length > 0) {
        this.openImagePreview();
      } else {
        this.openFileExplorer();
      }
    }
  }

  deleteNote() {
    this.loaderService.showLoader();
    this.http
      .delete(`${environment.ROOT_URL}/api/v1/note/${this.note._id}`)
      .pipe(finalize(() => this.loaderService.hideLoader()))
      .subscribe(() => this.router.navigate(['/home']));
  }

  convertToBase64(file): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (err) => reject(err);
    });
  }

  ionViewWillEnter() {
    this.imageFiles = [];
    const note = this.activatedRoute.snapshot.params.note;

    if (this.activatedRoute.snapshot.params.mode === 'add') {
      this.mode = 'ADD';
      this.isLoading = false;
    }

    this.noteForm = new FormGroup({
      dateOfEntry: new FormControl(new Date().toISOString()),
      title: new FormControl(),
      content: new FormControl(),
    });

    if (note) {
      this.note = JSON.parse(note);
      this.isLoading = false;
      this.noteForm.patchValue({
        dateOfEntry: this.note.dateOfEntry,
        title: this.note.title,
        content: this.note.content,
      });
      this.imageFiles = this.note.images;
    }
  }

  async openFileExplorer() {
    if (this.mode === 'EDIT') {
      this.imageInput.nativeElement.click();
    }
  }

  async handleFileSelect(event) {
    if (event.target.files.length) {
      const selectedFile = event.target.files[0];

      const base64 = await this.convertToBase64(selectedFile);
      this.imageFiles.push({
        name: selectedFile.name,
        base64,
      });
    }
  }

  ngAfterViewInit(): void {
    register();
  }
}
