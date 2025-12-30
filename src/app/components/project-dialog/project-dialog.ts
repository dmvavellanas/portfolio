import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ImageGalleryData, ImageGalleryDialog } from '../image-gallery-dialog/image-gallery-dialog';

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
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ProjectDialogData,
    private dialog: MatDialog
  ) {}

  public openGallery(startIndex: number = 0): void {
    const images = this.data.screenshots?.length
      ? this.data.screenshots
      : [this.data.imageSrc];

    this.dialog.open<ImageGalleryDialog, ImageGalleryData>(ImageGalleryDialog, {
      data: {
        title: this.data.title,
        images,
        startIndex,
      },
      maxWidth: '1100px',
      width: '98vw',
      panelClass: 'gallery-dialog-panel',
    });
  }
}