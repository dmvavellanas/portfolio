import { Component, HostListener } from '@angular/core';

type Fish = {
  x: number;
  y: number;
  size: number;
  speed: number;
  rot: number;
  opacity: number;
};

@Component({
  selector: 'app-fish-background',
  imports: [],
  templateUrl: './fish-background.html',
  styleUrl: './fish-background.scss',
})
export class FishBackground {
  public fishes: Fish[] = [];

  private mouseX = 0;
  private mouseY = 0;

  private rafId: number | null = null;
  private enabled = true;

  ngOnInit(): void {
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;
    const isMobile = window.matchMedia?.('(max-width: 768px)')?.matches;

    this.enabled = !(reduce || isMobile);

    if (!this.enabled) return;

    const count = 10;
    for (let i = 0; i < count; i++) {
      this.fishes.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: 18 + Math.random() * 22,
        speed: 0.02 + Math.random() * 0.03,
        rot: 0,
        opacity: 0.12 + Math.random() * 0.18,
      });
    }

    this.mouseX = window.innerWidth / 2;
    this.mouseY = window.innerHeight / 2;

    this.tick();
  }

  ngOnDestroy(): void {
    if (this.rafId) cancelAnimationFrame(this.rafId);
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(e: MouseEvent): void {
    if (!this.enabled) return;
    this.mouseX = e.clientX;
    this.mouseY = e.clientY;
  }

  @HostListener('window:resize')
  onResize(): void {
  }

  private tick = (): void => {
    for (let i = 0; i < this.fishes.length; i++) {
      const f = this.fishes[i];

      const offsetX = (i - this.fishes.length / 2) * 22;
      const offsetY = Math.sin(i * 0.8) * 18;

      const tx = this.mouseX + offsetX;
      const ty = this.mouseY + offsetY;

      const dx = tx - f.x;
      const dy = ty - f.y;

      f.x += dx * f.speed;
      f.y += dy * f.speed;

      f.rot = Math.atan2(dy, dx) * (180 / Math.PI);
    }

    this.rafId = requestAnimationFrame(this.tick);
  };
}
