import { Component, EventEmitter, Input, Output } from '@angular/core';

export type TechIcon = {
  src: string;
  alt: string;
};

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
})
export class ProjectCard {
  @Input({ required: true }) title!: string;
  @Input() imageSrc: string = 'https://via.placeholder.com/600x300';
  @Input() imageAlt: string = 'Project image';
  @Input() techIcons: TechIcon[] = [];

  @Output() cardClick = new EventEmitter<void>();

  public onClick(): void {
    this.cardClick.emit();
  }
}
