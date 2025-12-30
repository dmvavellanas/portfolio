import { Component, HostListener, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export type ImageGalleryData = {
  title?: string;
  images: string[];
  startIndex?: number;
};

@Component({
  selector: 'app-image-gallery-dialog',
  imports: [],
  templateUrl: './image-gallery-dialog.html',
  styleUrl: './image-gallery-dialog.scss',
})
export class ImageGalleryDialog {
  public index: number;

  constructor(@Inject(MAT_DIALOG_DATA) public data: ImageGalleryData) {
    this.index = Math.min(
      Math.max(data.startIndex ?? 0, 0),
      Math.max((data.images?.length ?? 1) - 1, 0)
    );
  }

  public prev(): void {
    if (!this.data.images?.length) return;
    this.index = (this.index - 1 + this.data.images.length) % this.data.images.length;
  }

  public next(): void {
    if (!this.data.images?.length) return;
    this.index = (this.index + 1) % this.data.images.length;
  }

  public goTo(i: number): void {
    this.index = i;
  }

  @HostListener('document:keydown', ['$event'])
  public onKeyDown(e: KeyboardEvent): void {
    if (e.key === 'ArrowLeft') this.prev();
    if (e.key === 'ArrowRight') this.next();
  }
}
