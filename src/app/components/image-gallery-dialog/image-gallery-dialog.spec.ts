import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageGalleryDialog } from './image-gallery-dialog';

describe('ImageGalleryDialog', () => {
  let component: ImageGalleryDialog;
  let fixture: ComponentFixture<ImageGalleryDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageGalleryDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageGalleryDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
