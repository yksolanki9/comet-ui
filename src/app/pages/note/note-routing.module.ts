import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatePipe } from '@angular/common';

import { NotePage } from './note.page';

const routes: Routes = [
  {
    path: ':id',
    component: NotePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [DatePipe],
})
export class NotePageRoutingModule {}
