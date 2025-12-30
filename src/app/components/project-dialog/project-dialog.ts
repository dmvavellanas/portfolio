import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export type ProjectDialogData = {
  title: string;
  imageSrc: string;
  imageAlt: string;
  context: string;
  role: string;
  stackText: string;
  whatIDid: string[];
  notes?: string;
  screenshots?: string[];
};

@Component({
  selector: 'app-project-dialog',
  imports: [],
  templateUrl: './project-dialog.html',
  styleUrl: './project-dialog.scss',
})
export class ProjectDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: ProjectDialogData) {}
}