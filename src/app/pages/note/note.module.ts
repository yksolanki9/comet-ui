import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotePageRoutingModule } from './note-routing.module';

import { NotePage } from './note.page';
import { DateInputComponent } from './date-input/date-input.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotePageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [NotePage, DateInputComponent]
})
export class NotePageModule {}
