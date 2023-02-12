import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotePageRoutingModule } from './note-routing.module';

import { NotePage } from './note.page';
import { DateInputComponent } from './date-input/date-input.component';
import { ImagePreviewModalComponent } from './image-preview-modal/image-preview-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotePageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [NotePage, DateInputComponent, ImagePreviewModalComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NotePageModule {}
